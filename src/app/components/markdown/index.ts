import {
    Component,
    Input,
    OnChanges,
    ElementRef,
    ViewChild,
    Output,
    EventEmitter,
    SecurityContext,
    AfterViewInit,
} from '@angular/core';
import { SourceService } from '@/services/source';
import { RenderService } from '@/services/render';
import { File } from '@/services/source/interfaces';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigateEvent, NavigateEventSource } from '@/interfaces/navigate';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

/**
 * 显示md文档
 */
@Component({
    selector: 'app-markdown',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class MarkdownComponent implements OnChanges, AfterViewInit, NavigateEventSource {
    constructor(readonly source: SourceService, readonly render: RenderService, readonly sanitizer: DomSanitizer) {}

    /** MD 文件 */
    @Input() file?: File<string> | null;

    /** MD 渲染结果 */
    readonly rendered = new BehaviorSubject<string>('');
    /** 解析结果 */
    readonly parsed = this.rendered.pipe(
        map((d) => {
            if (!d) return null;
            const p = new DOMParser().parseFromString(d, 'text/html');
            return p.body;
        }),
        tap((p) => {
            if (!p) this.headers = [];
            else {
                this.headers = Array.from(p.querySelectorAll<HTMLHeadingElement>('h1, h2, h3')).map((h) => {
                    return {
                        id: h.id,
                        title: h.innerText,
                        level: Number.parseInt(h.tagName.slice(1)),
                        element: h,
                    };
                });
            }
        }),
    );

    /** MD 文档节点 */
    @ViewChild('doc') doc!: ElementRef<HTMLElement>;

    /** @inheritdoc */
    @Output() navigate = new EventEmitter<NavigateEvent>();

    /** 标题 */
    headers: Array<{
        id: string;
        title: string;
        level: number;
        element: HTMLHeadingElement;
    }> = [];

    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.parsed.subscribe((parsed) => {
            const doc = this.doc.nativeElement;
            const hash = decodeURIComponent(location.hash.slice(1));
            doc.innerHTML = '';
            setTimeout(() => {
                doc.append(...Array.from(parsed?.children ?? []));
                if (hash) {
                    setTimeout(() => this.scrollTo(hash), 200);
                }
            }, 0);
        });
    }

    /**
     * 滚动到指定元素或页首
     */
    scrollTo(id?: string): boolean {
        if (!id) {
            this.doc.nativeElement.scrollIntoView();
            return true;
        }
        const target = document.getElementById(id);
        if (!target) return false;
        location.hash = '';
        setTimeout(() => {
            location.hash = id;
        }, 0);
        return true;
    }

    /**
     * @inheritdoc
     */
    ngOnChanges(): void {
        if (!this.file) {
            this.rendered.next('');
            return;
        }
        try {
            const html = this.render.render(this.file);
            this.rendered.next(html);
        } catch (ex) {
            this.rendered.next(this.sanitizer.sanitize(SecurityContext.HTML, String(ex)) ?? '');
        }
    }

    /**
     * 点击文档元素
     */
    onClick(event: HTMLElementEventMap['click']): void {
        const file = this.file;
        if (!file) return;
        const target = event.target as HTMLElement;
        if (target instanceof HTMLAnchorElement && target.href) {
            event.preventDefault();
            const href = new URL(target.href, file.url);
            if (href.origin === location.origin) {
                if (location.pathname !== href.pathname) {
                    this.navigate.emit(new NavigateEvent(href.pathname, href.hash));
                } else {
                    this.scrollTo(decodeURIComponent(href.hash.slice(1)));
                }
            } else {
                window.open(href.href, '_blank', 'noopener');
            }
        }
    }
}
