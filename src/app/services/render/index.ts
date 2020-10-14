import { Injectable } from '@angular/core';
import { File } from '../source/interfaces';
import { SourceService } from '../source';
import type MarkdownIt from 'markdown-it';
import markdownIt from './markdown-it';
import { GlobalService } from '../global';

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
        this.md = markdownIt(global);
        const normalizeLink = this.md.normalizeLink.bind(this.md);
        this.md.normalizeLink = (url: string): string => {
            if (!this.file) return normalizeLink(url);
            if (url.includes(':')) return normalizeLink(url);
            if (url.startsWith('#') || /\.md(#[^#]*)?$/i.test(url)) {
                const path = source.normalizePath(url, this.file.path);
                return normalizeLink(
                    this.options.replaceDocExt ? path.replace(/(\/index)?\.md(#[^#]*)?$/i, '$2') : path,
                );
            }
            return normalizeLink(new URL(url, this.file.url).href);
        };
        this.md.validateLink = () => true;
    }

    /** markdown-it 实例 */
    private md: MarkdownIt;
    /** 正在处理的文件 */
    private file?: File<string>;
    /** 转换选项 */
    private options: Required<Options> = RenderService.defaultOptions;
    /**
     * 渲染
     */
    render(file: File<string>, options?: Options): HTMLTemplateElement {
        try {
            this.options = { ...RenderService.defaultOptions, ...options };
            this.file = file;
            return ((this.md as unknown) as {
                /**
                 * 渲染为 HTMLTemplateElement
                 */
                renderFragment(value: string): HTMLTemplateElement;
            }).renderFragment(file.data);
        } catch (ex) {
            console.warn(file, options, ex);
            throw ex;
        } finally {
            this.file = undefined;
        }
    }
}
