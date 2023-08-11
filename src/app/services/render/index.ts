import { Injectable } from '@angular/core';
import { load } from 'js-yaml';
import { createRenderer, IncrementalMarkdownIt, MarkdownElement } from '@cloudpss/web-components/markdown';
import { theme } from '@cloudpss/web-components/config';
import Token from 'markdown-it/lib/token';
import { FrontMatter } from '@/interfaces/manifest';
import { SourceService } from '../source';
import { File } from '../source/interfaces';
import { GlobalService } from '../global';
import { postRender } from './post-render';
import { lastValueFrom, Observable, defer } from 'rxjs';

/** 渲染参数 */
type Args = {
    /**
     * 替换 .md 扩展名
     */
    replaceDocExt?: boolean;
    file: File<string>;
    root: File<string>;
};

/** 渲染上下文 */
type Context = Args & {
    frontMatter?: FrontMatter;
    md: IncrementalMarkdownIt;
};

/** 渲染环境 */
type Env = {
    abbreviations?: Record<string, string>;
    footnotes?: {
        list: unknown[];
        refs: Record<string, number>;
    };
};

/**
 * 提供文档内容
 */
@Injectable({ providedIn: 'root' })
export class RenderService {
    constructor(
        readonly source: SourceService,
        readonly global: GlobalService,
    ) {
        global.theme.subscribe((t) => {
            theme.next(t === 'dark' ? 'dark' : 'light');
        });
    }
    /** 创建渲染器 */
    private context(args: Args): Context {
        const context = args as Context;
        const md = createRenderer({
            frontMatter: (fm) => {
                const f = load(fm) as FrontMatter;
                if (f['redirect to']) {
                    f['redirect to'] = md.normalizeLink(f['redirect to']);
                }
                context.frontMatter = f;
            },
            documentSrc: context.file.url,
        });
        const replaceDocExt = context.replaceDocExt ?? true;
        const normalizeLink = md.normalizeLink.bind(md);
        md.normalizeLink = (url: string): string => {
            if (/^([a-z][a-z0-9]*:|\/\/)/i.test(url)) return normalizeLink(url);
            if (url.startsWith('#')) {
                const path = this.source.normalizePath(url, context.root.path).replace(/^\/[^/]+/, '');
                return normalizeLink(replaceDocExt ? path.replace(/(\/index)?\.md(#[^#]*)?$/i, '$2') : path);
            }
            if (/\.md(#[^#]*)?$/i.test(url)) {
                const path = this.source.normalizePath(url, context.file.path).replace(/^\/[^/]+/, '');
                return normalizeLink(replaceDocExt ? path.replace(/(\/index)?\.md(#[^#]*)?$/i, '$2') : path);
            }
            return normalizeLink(new URL(url, context.file.url).href);
        };
        md.validateLink = () => true;
        context.md = md;
        return context;
    }

    /** 解析 */
    private async parse(args: Args): Promise<[context: Context, tokens: Token[], env: Env]> {
        const context = this.context({ ...args });
        const md = context.md;
        const env: Env = {};
        const { file } = context;
        const tokens = md.parse(file.data, env);

        for (let index = 0; index < tokens.length; index++) {
            const token = tokens[index];
            if (
                token.type !== 'inline' ||
                tokens[index - 1]?.type !== 'figure_open' ||
                tokens[index + 1]?.type !== 'figure_close' ||
                token.children?.length !== 1 ||
                token.children[0].type !== 'image' ||
                /\.\w+$/.test(token.children[0].attrGet('src') || '.jpg')
            )
                continue;

            const fileLang = file.path.split('/')[1];
            const src = `/${fileLang}${new URL(token.children[0].attrGet('src')!, file.url).pathname}`;
            const importedTokens: Token[] = [];
            const importedDoc = this.source.findDocument(src);
            if (importedDoc) {
                const file = await lastValueFrom(this.source.file(importedDoc.path, 'text'));
                const [, innerTokens, innerEnv] = await this.parse({ ...args, file });
                if (innerEnv.abbreviations) {
                    if (!env.abbreviations) env.abbreviations = {};
                    Object.assign(env.abbreviations, innerEnv.abbreviations);
                }
                if (innerEnv.footnotes) {
                    if (!env.footnotes) env.footnotes = { list: [], refs: {} };
                    env.footnotes.list.push(...innerEnv.footnotes.list);
                    for (const [key, count] of Object.entries(innerEnv.footnotes.refs)) {
                        env.footnotes.refs[key] = (env.footnotes.refs[key] ?? 0) + count;
                    }
                }
                importedTokens.push(...innerTokens);
            } else {
                const p = new Token('paragraph_open', 'p', 1);
                p.attrSet('class', 'import-not-found');
                const t = new Token('text', '', 0);
                t.content = `未找到 ${src} 文档`;
                importedTokens.push(p, t, new Token('paragraph_close', 'p', -1));
            }
            tokens.splice(index - 1, 3, ...importedTokens);
            index = index - 1 + importedTokens.length;
        }

        return [context, tokens, env];
    }

    /**
     * 渲染
     */
    private async renderImpl(file: File<string>): Promise<[HTMLTemplateElement, FrontMatter]> {
        try {
            const [context, tokens, env] = await this.parse({ file, root: file });

            const template = context.md.renderer.render(tokens, context.md.options, env);
            const element = document.createElement('template');
            MarkdownElement.patcher(element.content, template);
            postRender(element);
            const filename = /([^/]+)\.md$/i.exec(file.path)?.[1] ?? '';
            let title = filename;
            if (filename.toLowerCase() === 'index') {
                title = /([^/]+)\/index\.md$/i.exec(file.path)?.[1] ?? '';
            }

            return [element, { title, ...context.frontMatter, content: file.data }];
        } catch (ex) {
            // eslint-disable-next-line no-console
            console.warn(file, ex);
            throw ex;
        }
    }

    /**
     * 渲染
     */
    render(file: File<string>): Observable<[HTMLTemplateElement, FrontMatter]> {
        return defer(() => this.renderImpl(file));
    }
}
