import { Injectable } from '@angular/core';
import { File } from '../source/interfaces';
import { SourceService } from '../source';
import type MarkdownIt from 'markdown-it';
import type markdownIt from './markdown-it';
import { GlobalService } from '../global';
import { FrontMatter } from '@/interfaces/manifest';
import { load } from 'js-yaml';
import * as path from 'path';

/**
 * 渲染设置
 */
export interface Options {
    /**
     * 替换 .md 扩展名
     */
    replaceDocExt?: boolean | string;
}

/**
 * 提供文档内容
 */
@Injectable({
    providedIn: 'root',
})
export class RenderService {
    /** 默认设置 */
    static defaultOptions: Required<Options> = {
        replaceDocExt: true,
    };

    constructor(readonly source: SourceService, readonly global: GlobalService) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        this.md = (require('./markdown-it') as typeof markdownIt)({
            frontMatter: (fm) => {
                const frontMatter = load(fm) as FrontMatter;
                if (frontMatter['redirect to']) {
                    frontMatter['redirect to'] = this.md.normalizeLink(frontMatter['redirect to']);
                }
                this.frontMatter = frontMatter;
            },
        });
        const normalizeLink = this.md.normalizeLink.bind(this.md);
        this.md.normalizeLink = (url: string): string => {
            if (!this.file) return normalizeLink(url);
            if (/^([a-z][a-z0-9]*:|\/\/)/i.test(url)) return normalizeLink(url);
            if (url.startsWith('#') || /\.md(#[^#]*)?$/i.test(url)) {
                const path = source.normalizePath(url, this.file.path).replace(/^\/[^/]+/, '');
                return normalizeLink(
                    this.options.replaceDocExt ? path.replace(/(\/index)?\.md(#[^#]*)?$/i, '$2') : path,
                );
            }
            return normalizeLink(new URL(url, this.file.url).href);
        };
        this.md.validateLink = () => true;
    }

    /** markdown-it 实例 */
    private md: MarkdownIt.MarkdownItExt;
    /** 正在处理的文件 */
    private file?: File<string>;
    /** 正在处理的FrontMatter */
    private frontMatter?: FrontMatter;
    /** 转换选项 */
    private options: Required<Options> = RenderService.defaultOptions;
    /**
     * 渲染
     */
    render(file: File<string>, options?: Options): [HTMLTemplateElement, FrontMatter] {
        try {
            this.options = { ...RenderService.defaultOptions, ...options };
            this.file = file;
            const rendered = this.md.renderFragment(file.data);

            const filename = path.basename(file.path, '.md');
            let title = filename;
            if (filename.toLowerCase() === 'index') {
                title = path.basename(path.dirname(file.path));
            }

            return [rendered, { title, ...this.frontMatter, content: file.data }];
        } catch (ex) {
            // eslint-disable-next-line no-console
            console.warn(file, options, ex);
            throw ex;
        } finally {
            this.file = undefined;
            this.frontMatter = undefined;
        }
    }
}
