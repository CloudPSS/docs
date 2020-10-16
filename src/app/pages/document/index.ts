import { Component, ViewChild, AfterViewInit, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { of, merge, Subject, combineLatest, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, pluck, delay, mergeMap, catchError, throttleTime } from 'rxjs/operators';
import { LayoutService } from '@/services/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { SourceService } from '@/services/source';
import { NavigateEvent } from '@/interfaces/navigate';
import { MarkdownComponent } from '@/components/markdown';
import { GlobalService } from '@/services/global';

/**
 * 文档页面组件
 */
@Component({
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class DocumentComponent implements AfterViewInit, OnDestroy {
    constructor(
        readonly route: ActivatedRoute,
        readonly router: Router,
        readonly source: SourceService,
        readonly layout: LayoutService,
        readonly global: GlobalService,
    ) {}
    /** 侧边栏 */
    @ViewChild('sidenav') readonly sidenav!: MatSidenav;
    /** scroll */
    @ViewChild('scroll') readonly scroll!: ElementRef<HTMLDivElement>;
    /** toc */
    @ViewChild('md') readonly md!: MarkdownComponent;
    /** url */
    readonly url = this.route.params.pipe(
        map((s) => {
            const lang = this.global.getLanguage();
            const category = s.category as string;
            const path: string[] = [];
            for (const key in s) {
                const i = Number.parseInt(key);
                if (!Number.isNaN(i)) {
                    path[i] = s[key] as string;
                }
            }
            if (category) path.unshift(category);
            if (lang) path.unshift(lang);
            path.unshift('');
            return path.join('/');
        }),
        tap(() => {
            if (this.sidenav && this.sidenav.mode !== 'side') {
                void this.sidenav.close();
            }
        }),
    );

    /** 当前文件信息 */
    readonly info = this.url.pipe(map((u) => this.source.findDocument(u)));
    /** 当前文件 frontMatter */
    readonly frontMatter = this.info.pipe(map((u) => u?.[1]));
    /** 触发更新TOC */
    readonly updateTocSource = new Subject<void>();

    /** 当前文档 */
    readonly document = this.info.pipe(
        mergeMap((u) => {
            if (!u) {
                void this.onNavigate();
                return of(null);
            }
            const [doc, fm] = u;
            this.global.setTitle(fm?.title);
            return merge(of(null), this.source.file(doc, 'text'));
        }),
        catchError(async () => {
            await this.router.navigate(['error', 404], { replaceUrl: true });
            return null;
        }),
        tap((file) => {
            this.global.setDescription(file?.data);
        }),
    );

    /** 当前标题 */
    currentId = '';

    /** 当前分类 */
    readonly category = this.route.params.pipe<string>(pluck('category'));

    /** 订阅事件 */
    private readonly subscriptions: Subscription[] = [];
    /** @inheritdoc */
    ngOnDestroy(): void {
        const subscriptions = this.subscriptions.splice(0);
        subscriptions.forEach((s) => s.unsubscribe());
        this.global.menuButton.next(null);
    }

    /** @inheritdoc */
    ngAfterViewInit(): void {
        let scrollMarginTop = -1;
        this.subscriptions.push(
            combineLatest(this.frontMatter, merge(of(this.sidenav.opened), this.sidenav.openedChange.asObservable()))
                .subscribe(([fm, opened]) => {
                    if (fm?.nav === false) {
                        this.global.menuButton.next(null);
                    }
                    this.global.menuButton.next({
                        icon: 'menu',
                        title: 'sidenav.' + (opened ? 'close' : 'open'),
                        click: () => this.sidenav.toggle(),
                    });
                })
                .add(() => this.global.menuButton.next(null)),
            combineLatest(this.md.headers, this.updateTocSource.pipe(throttleTime(50))).subscribe(([headers]) => {
                const host = this.scroll.nativeElement;
                if (headers.length === 0 || !host) {
                    this.currentId = '';
                    return;
                }
                if (scrollMarginTop < 0) {
                    scrollMarginTop = Number.parseFloat(
                        ((getComputedStyle(headers[0].element) as unknown) as Record<string, string>).scrollMarginTop,
                    );
                    if (Number.isNaN(scrollMarginTop)) scrollMarginTop = 0;
                    scrollMarginTop += 1;
                }
                const top = host.scrollTop + scrollMarginTop;
                let i = headers.findIndex((h) => h.element.offsetTop > top);
                if (i < 0) i = headers.length;
                this.currentId = headers[i - 1]?.id ?? '';
            }),
            this.layout.sidenavMode
                .pipe(
                    delay(100),
                    mergeMap(async (d) => {
                        if (d === 'side') {
                            await this.sidenav.open();
                        } else {
                            await this.sidenav.close();
                        }
                    }),
                )
                .subscribe(),
        );
        this.updateToc();
    }

    /**
     * 导航页面
     */
    async onNavigate(target?: NavigateEvent): Promise<void> {
        if (target) {
            await this.router.navigate([target.path], { fragment: target.fragment });
        } else {
            await this.router.navigate(['error', 404], { replaceUrl: true });
        }
    }

    /**
     * 更新 TOC
     */
    @HostListener('window:resize')
    updateToc(): void {
        this.updateTocSource.next();
    }
}
