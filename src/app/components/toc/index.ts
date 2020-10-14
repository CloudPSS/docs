import { Component, Input, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MarkdownComponent } from '../markdown';

/**
 * 显示 TOC
 */
@Component({
    selector: 'app-toc',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class TocComponent {
    /** MD 文件 */
    _document?: MarkdownComponent;

    /** nav */
    @ViewChild('nav') nav?: ElementRef<HTMLElement>;
    /** mask */
    @ViewChild('mask') mask!: ElementRef<HTMLElement>;
    /** li items */
    @ViewChildren('itemElement') items?: QueryList<ElementRef<HTMLLIElement>>;

    /** MD 文件 */
    @Input() get document(): MarkdownComponent | undefined {
        return this._document;
    }
    set document(value: MarkdownComponent | undefined) {
        this._document = value;
    }

    /** 大纲级别 */
    @Input() level = 3;

    /** 监听文档更改 */
    observer?: Subscription;

    /** 当前活跃 ID */
    _currentId = '';
    /** 当前活跃 ID */
    @Input() get currentId(): string {
        return this._currentId;
    }
    /** 当前活跃 ID */
    set currentId(value: string) {
        this._currentId = value ?? '';
        const nav = this.nav?.nativeElement;
        if (!(nav && this.items)) {
            return;
        }
        const mask = this.mask.nativeElement;
        if (value) {
            const item = this.items.find((i) => i.nativeElement?.dataset?.id === value);
            if (item) {
                this.offset = item.nativeElement.offsetTop - mask.clientHeight / 4;
            }
        } else {
            this.offset = 0;
        }
        const max = Math.max(nav.clientHeight - mask.clientHeight, 0);
        this.offset = Math.max(this.offset, 0);
        this.offset = Math.min(this.offset, max);
        this.scrollInfo = {
            before: this.offset > 1,
            after: this.offset < max - 1,
        };
    }

    /** 菜单偏移 */
    offset = 0;

    /** 滚动遮罩信息 */
    scrollInfo = {
        before: false,
        after: false,
    };
}
