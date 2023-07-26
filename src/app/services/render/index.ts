import { Injectable } from '@angular/core';
import { File } from '../source/interfaces';
import { SourceService } from '../source';
import { FrontMatter } from '@/interfaces/manifest';
import { load } from 'js-yaml';
import { MarkdownElement } from '@cloudpss/web-components/markdown';
import { theme } from '@cloudpss/web-components/config';
import { postRender } from './post-render';
import { GlobalService } from '../global';

/**
 * 渲染设置
 */
export interface Options {
    /**
     * 替换 .md 扩展名
     */
    replaceDocExt?: boolean;
}

/**
 * 提供文档内容
 */
@Injectable({ providedIn: 'root' })
export class RenderService {
    /** 默认设置 */
    static defaultOptions: Required<Options> = {
        replaceDocExt: true,
    };

    constructor(
        readonly source: SourceService,
        readonly global: GlobalService,
    ) {
        global.theme.subscribe((t) => {
            theme.next(t === 'dark' ? 'dark' : 'light');
        });
    }
    /**
     * 渲染
     */
    render(file: File<string>, options: Options = {}): [HTMLTemplateElement, FrontMatter] {
        try {
            options = { ...RenderService.defaultOptions, ...options };
            let frontMatter: FrontMatter | undefined;
            const md = MarkdownElement.renderer({
                get documentSrc(): URL | undefined {
                    return file.url;
                },
                frontMatter: (fm) => {
                    const f = load(fm) as FrontMatter;
                    if (f['redirect to']) {
                        f['redirect to'] = md.normalizeLink(f['redirect to']);
                    }
                    frontMatter = f;
                },
            });
            const normalizeLink = md.normalizeLink.bind(md);
            md.normalizeLink = (url: string): string => {
                if (/^([a-z][a-z0-9]*:|\/\/)/i.test(url)) return normalizeLink(url);
                if (url.startsWith('#') || /\.md(#[^#]*)?$/i.test(url)) {
                    const path = this.source.normalizePath(url, file.path).replace(/^\/[^/]+/, '');
                    return normalizeLink(
                        options.replaceDocExt ? path.replace(/(\/index)?\.md(#[^#]*)?$/i, '$2') : path,
                    );
                }
                return normalizeLink(new URL(url, file.url).href);
            };
            md.validateLink = () => true;
            const template = md.render(file.data);
            const element = document.createElement('template');
            MarkdownElement.patcher(element.content, template);
            postRender(element);
            const filename = /([^/]+)\.md$/i.exec(file.path)?.[1] ?? '';
            let title = filename;
            if (filename.toLowerCase() === 'index') {
                title = /([^/]+)\/index\.md$/i.exec(file.path)?.[1] ?? '';
            }

            return [element, { title, ...frontMatter, content: file.data }];
        } catch (ex) {
            // eslint-disable-next-line no-console
            console.warn(file, options, ex);
            throw ex;
        }
    }
}
