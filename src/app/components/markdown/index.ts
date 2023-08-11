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
    OnDestroy,
} from '@angular/core';
import { SourceService } from '@/services/source';
import { RenderService } from '@/services/render';
import { File } from '@/services/source/interfaces';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigateEvent, NavigateEventSource } from '@/interfaces/navigate';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Router, Scroll } from '@angular/router';
import { FrontMatter } from '@/interfaces/manifest';

/**
 * 显示md文档
 */
@Component({
    selector: 'app-markdown',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class MarkdownComponent implements OnChanges, AfterViewInit, NavigateEventSource, OnDestroy {
    constructor(
        readonly source: SourceService,
        readonly render: RenderService,
        readonly sanitizer: DomSanitizer,
        readonly router: Router,
    ) {}

    /** MD 文件 */
    @Input() file?: File<string> | null;

    /** MD 渲染结果 */
    private readonly rendered = new BehaviorSubject<HTMLTemplateElement>(document.createElement('template'));
    /** MD 渲染结果 */
    readonly frontMatter = new BehaviorSubject<FrontMatter | undefined>(undefined);

    /** MD 文档节点 */
    @ViewChild('doc') readonly doc!: ElementRef<HTMLElement>;

    /** @inheritdoc */
    @Output() readonly navigate = new EventEmitter<NavigateEvent>();

    /** 标题 */
    readonly headers = new BehaviorSubject<
        Array<{
            id: string;
            title: string;
            level: number;
            element: HTMLHeadingElement;
        }>
    >([]);

    /** 订阅事件 */
    private readonly subscriptions: Subscription[] = [];
    /** @inheritdoc */
    ngOnDestroy(): void {
        const subscriptions = this.subscriptions.splice(0);
        subscriptions.forEach((s) => s.unsubscribe());
    }

    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.subscriptions.push(
            this.router.events.pipe(filter((x): x is Scroll => x instanceof Scroll)).subscribe((scroll) => {
                this.scrollTo(scroll.anchor);
            }),
            this.frontMatter.subscribe((fm) => {
                if (fm?.['redirect to']) {
                    this.navigateImpl(fm['redirect to'], true);
                }
            }),
            this.rendered.subscribe((parsed) => {
                const doc = this.doc.nativeElement;
                const hash = decodeURIComponent(location.hash.slice(1));
                doc.innerHTML = '';
                // 将清空 parsed 的内容
                doc.append(parsed.content);
                const headers = Array.from(
                    doc.querySelectorAll<HTMLHeadingElement>(
                        'article > h1,article > h2,article > h3,article > h4,article > h5,article > h6',
                    ),
                ).map((h) => {
                    return {
                        id: h.id,
                        title: h.textContent ?? '',
                        level: Number.parseInt(h.tagName.slice(1)),
                        element: h,
                    };
                });
                this.headers.next(headers);
                if (hash) {
                    setTimeout(() => this.scrollTo(hash), 200);
                }
            }),
        );
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
        // eslint-disable-next-line unicorn/prefer-query-selector
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
            this.rendered.next(document.createElement('template'));
            return;
        }
        this.render.render(this.file).subscribe({
            next: ([html, fm]) => {
                this.rendered.next(html);
                this.frontMatter.next(fm);
            },
            error: (ex) => {
                const el = document.createElement('template');
                el.innerHTML = this.sanitizer.sanitize(SecurityContext.HTML, String(ex)) ?? '';
                this.rendered.next(el);
                this.frontMatter.next(undefined);
            },
        });
    }

    /**
     * 导航
     */
    private navigateImpl(href: string, replaceUrl = false): boolean {
        const file = this.file;
        if (!file) return false;
        const hrefUrl = new URL(href, location.href);
        if (hrefUrl.origin === location.origin) {
            const hash = decodeURIComponent(hrefUrl.hash.slice(1));
            this.navigate.emit(new NavigateEvent(hrefUrl.pathname, hash, replaceUrl));
            return true;
        } else {
            window.open(hrefUrl.href, '_blank', 'noopener');
            return true;
        }
    }

    /**
     * 点击文档元素
     */
    onClick(event: HTMLElementEventMap['click']): void {
        const target = event.target as HTMLElement;
        const link = target.closest<HTMLAnchorElement>('a[href]');
        if (link) {
            if (this.navigateImpl(link.href)) {
                event.preventDefault();
            }
        }
    }
}
