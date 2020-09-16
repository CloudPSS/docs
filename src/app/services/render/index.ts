import { Injectable } from '@angular/core';
import { File } from '../source/interfaces';
import * as MarkdownIt from 'markdown-it';
import { SourceService } from '../source';
import { UrlSegment } from '@angular/router';

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

    constructor(readonly source: SourceService) {
        this.md = MarkdownIt({
            html: true,
            typographer: true,
        });
        const normalizeLink = this.md.normalizeLink.bind(this.md);
        this.md.normalizeLink = (url: string): string => {
            if (!this.file) return normalizeLink(url);
            if (url.includes(':')) return normalizeLink(url);
            if (/\.md$/i.test(url)) {
                const path = this.options.replaceDocExt ? url.replace(/(\/index)?\.md$/i, '') : url;
                return normalizeLink(source.normalizePath(path, this.file.path));
            }
            return new URL(normalizeLink(url), this.file.url).href;
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
    render(file: File<string>, options?: Options): string {
        try {
            this.options = { ...RenderService.defaultOptions, ...options };
            this.file = file;
            return this.md.render(file.data);
        } finally {
            this.file = undefined;
        }
    }
}
