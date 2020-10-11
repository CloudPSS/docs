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
import { map, filter } from 'rxjs/operators';
import { Router, Scroll } from '@angular/router';

/**
 * 显示md文档
 */
@Component({
    selector: 'app-markdown',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class MarkdownComponent implements OnChanges, AfterViewInit, NavigateEventSource {
    constructor(
        readonly source: SourceService,
        readonly render: RenderService,
        readonly sanitizer: DomSanitizer,
        readonly router: Router,
    ) {}

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
    );

    /** MD 文档节点 */
    @ViewChild('doc') doc!: ElementRef<HTMLElement>;

    /** @inheritdoc */
    @Output() navigate = new EventEmitter<NavigateEvent>();

    /** 标题 */
    readonly headers = new BehaviorSubject<
        Array<{
            id: string;
            title: string;
            level: number;
            element: HTMLHeadingElement;
        }>
    >([]);

    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.router.events.pipe(filter((x): x is Scroll => x instanceof Scroll)).subscribe((scroll) => {
            this.scrollTo(scroll.anchor);
        });
        this.parsed.subscribe((parsed) => {
            const doc = this.doc.nativeElement;
            const hash = decodeURIComponent(location.hash.slice(1));
            doc.innerHTML = '';
            doc.append(...Array.from(parsed?.children ?? []));
            const headers = Array.from(doc.querySelectorAll<HTMLHeadingElement>('h1,h2,h3,h4,h5,h6'));
            this.headers.next(
                headers.map((h) => {
                    return {
                        id: h.id,
                        title: h.innerText,
                        level: Number.parseInt(h.tagName.slice(1)),
                        element: h,
                    };
                }),
            );
            if (hash) {
                setTimeout(() => this.scrollTo(hash), 200);
            }
        });
    }

    /**
     * 滚动到指定元素或页首
     */
    scrollTo(id: string | null): boolean {
        this.doc.nativeElement.querySelectorAll('.target').forEach((el) => el.classList.remove('target'));
        if (!id) {
            if (this.doc.nativeElement.offsetParent) {
                this.doc.nativeElement.offsetParent.scrollTo({ top: 0 });
            } else {
                this.doc.nativeElement.scrollIntoView();
            }
            return true;
        }
        const target = document.getElementById(id);
        if (!target) return false;
        target.classList.add('target');
        target.scrollIntoView();
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
                const hash = decodeURIComponent(href.hash.slice(1));
                this.navigate.emit(new NavigateEvent(href.pathname, hash));
            } else {
                window.open(href.href, '_blank', 'noopener');
            }
        }
    }
}
