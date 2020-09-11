import { Injectable } from '@angular/core';
import { File } from '../source/interfaces';
import * as markdown from 'markdown-it';

/**
 * 提供文档内容
 */
@Injectable({
    providedIn: 'root',
})
export class RenderService {
    constructor() {
        this.md = markdown({
            html: true,
            typographer: true,
        });
        const normalizeLink = this.md.normalizeLink.bind(this.md);
        this.md.normalizeLink = (url: string): string => {
            const res = normalizeLink(url);
            if (this.file) {
                return new URL(res, this.file.url).href;
            }
            return res;
        };
    }
    /** markdown-it 实例 */
    private md: markdown;
    /** 正在处理的文件 */
    private file?: File<string>;
    /**
     * 渲染
     */
    render(file: File<string>): string {
        try {
            this.file = file;
            return this.md.render(file.data);
        } finally {
            this.file = undefined;
        }
    }
}
