import { Component, Input, OnChanges, ElementRef, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { SourceService } from '@/services/source';
import { RenderService } from '@/services/render';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, tap } from 'rxjs/operators';
import { File } from '@/services/source/interfaces';

/**
 * 显示md文档
 */
@Component({
    selector: 'app-markdown',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class MarkdownComponent implements OnChanges, AfterViewInit {
    constructor(readonly source: SourceService, readonly render: RenderService, readonly sanitizer: DomSanitizer) {}

    /** 文档路径 */
    @Input() path?: string | null;
    /** 渲染结果 */
    rendered: SafeHtml = this.sanitizer.bypassSecurityTrustHtml('');
    /** 原始文件 */
    file?: File<string>;

    /** */
    @ViewChild('doc') doc!: ElementRef<HTMLElement>;

    /** 导航 */
    @Output() navigate = new EventEmitter<string>();

    /** */
    headers: Array<{
        title: string;
        level: number;
        link: string;
    }> = [];

    /**
     * @inheritdoc
     */
    ngAfterViewInit(): void {
        new MutationObserver(() => this.onViewUpdated()).observe(this.doc.nativeElement, { childList: true });
    }

    /**
     * 文档更新后触发
     */
    onViewUpdated(): void {
        this.headers = Array.from(this.doc.nativeElement.querySelectorAll<HTMLHeadingElement>('h1, h2, h3')).map(
            (h, i) => {
                const hash = `${i} ${h.innerText}`;
                h.id = hash;
                const url = new URL(location.href);
                url.hash = '#' + hash;
                return {
                    title: h.innerText,
                    level: Number.parseInt(h.tagName.slice(1)),
                    link: url.href,
                };
            },
        );
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
            this.rendered = '';
            this.file = undefined;
            return;
        }
        const doc = this.source.findDocument(this.path);
        if (!doc) {
            this.rendered = '';
            this.file = undefined;
            this.navigate.emit();
            return;
        }
        this.source
            .file(doc.path, 'text')
            .pipe(
                tap((f) => (this.file = f)),
                map((s) => this.render.render(s)),
            )
            .subscribe(
                (v) => (this.rendered = this.sanitizer.bypassSecurityTrustHtml(v)),
                (err) => (this.rendered = String(err)),
            );
    }

    /**
     *
     */
    onClick(event: HTMLElementEventMap['click']): void {
        const file = this.file;
        if (!file) return;
        event.preventDefault();
        const target = event.target as HTMLElement;
        if (target instanceof HTMLAnchorElement) {
            const href = new URL(target.href, file.url);
            if (href.origin === location.origin) {
                this.navigate.emit(href.pathname);
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
