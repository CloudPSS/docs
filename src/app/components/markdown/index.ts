import { Component, Input, OnChanges, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { SourceService } from '@/services/source';
import { RenderService } from '@/services/render';
import { map, tap } from 'rxjs/operators';
import { File } from '@/services/source/interfaces';

/**
 * 导航事件
 */
export interface NavigateEvent {
    /**
     * 目标路径
     */
    path: string;
    /**
     * 目标 hash
     */
    hash: string;
}

/**
 * 显示md文档
 */
@Component({
    selector: 'app-markdown',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class MarkdownComponent implements OnChanges {
    constructor(readonly source: SourceService, readonly render: RenderService) {}

    /** 文档路径 */
    @Input() path?: string | null;
    /** 原始文件 */
    file?: File<string>;

    /** */
    @ViewChild('doc') doc!: ElementRef<HTMLElement>;

    /** 导航 */
    @Output() navigate = new EventEmitter<NavigateEvent>();

    /** */
    headers: Array<{
        title: string;
        level: number;
        link: string;
    }> = [];

    /**
     * 更新文档
     */
    updateDoc(rendered: string): void {
        const doc = this.doc.nativeElement;
        doc.innerHTML = rendered;
        this.headers = Array.from(doc.querySelectorAll<HTMLHeadingElement>('h1, h2, h3')).map((h) => {
            const url = new URL(location.href);
            url.hash = h.id;
            return {
                title: h.innerText,
                level: Number.parseInt(h.tagName.slice(1)),
                link: url.href,
            };
        });
        setTimeout(() => this.scrollTo(decodeURIComponent(location.hash.slice(1))), 200);
    }

    /**
     *
     */
    scrollTo(id: string): boolean {
        if (!id) return false;
        const target = document.getElementById(id);
        console.log(id, target);
        if (!target) return false;
        target.id = '';
        location.hash = id;
        target.id = id;
        target.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        });
        return true;
    }

    /**
     * @inheritdoc
     */
    ngOnChanges(): void {
        if (!this.path) {
            this.doc.nativeElement.innerHTML = '';
            this.file = undefined;
            return;
        }
        const doc = this.source.findDocument(this.path);
        if (!doc) {
            if (this.doc) this.doc.nativeElement.innerHTML = '';
            this.file = undefined;
            this.navigate.emit();
            return;
        }
        this.source
            .file(doc, 'text')
            .pipe(
                tap((f) => (this.file = f)),
                map((s) => this.render.render(s)),
            )
            .subscribe(
                (v) => this.updateDoc(v),
                (err) => this.updateDoc(String(err)),
            );
    }

    /**
     *
     */
    onClick(event: HTMLElementEventMap['click']): void {
        const file = this.file;
        if (!file) return;
        const target = event.target as HTMLElement;
        if (target instanceof HTMLAnchorElement) {
            event.preventDefault();
            const href = new URL(target.href, file.url);
            if (href.origin === location.origin) {
                if (location.pathname !== href.pathname) {
                    this.navigate.emit({ path: href.pathname, hash: href.hash });
                } else {
                    location.hash = href.hash;
                }
            } else {
                window.open(href.href, '_blank', 'noopener');
            }
        }
    }

    /**
     *
     */
    onNavClick(event: HTMLElementEventMap['click']): void {
        event.preventDefault();
        const hash = decodeURIComponent(new URL((event.target as HTMLAnchorElement).href).hash);
        this.scrollTo(hash.slice(1));
    }
}
