import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, pluck, delay, mergeMap } from 'rxjs/operators';
import { LayoutService } from '@/services/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Title } from '@angular/platform-browser';
import { SourceService } from '@/services/source';
import { NavigateEvent } from '@/interfaces/navigate';

/**
 * 文档页面组件
 */
@Component({
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class DocumentComponent implements AfterViewInit {
    constructor(
        readonly route: ActivatedRoute,
        readonly router: Router,
        readonly source: SourceService,
        readonly layout: LayoutService,
        readonly title: Title,
    ) {}
    /** 侧边栏 */
    @ViewChild('sidenav') readonly sidenav!: MatSidenav;

    /** url */
    readonly url = this.route.params.pipe(
        map((s) => {
            const lang = s.language as string;
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
        tap((s) => console.log(s)),
    );

    /** 当前文档 */
    readonly document = this.url.pipe(
        mergeMap((u) => {
            const [doc, fm] = this.source.findDocument(u) ?? [];
            if (!doc) return of(null);
            this.title.setTitle(fm?.title ?? '');
            return this.source.file(doc, 'text');
        }),
    );

    /** 当前分类 */
    readonly category = this.route.params.pipe<string>(pluck('category'));
    /** @inheritdoc */
    ngAfterViewInit(): void {
        this.layout.sidenavMode
            .pipe(
                delay(100),
                mergeMap(async (d) => {
                    console.log('x');
                    if (d === 'side') {
                        await this.sidenav.open();
                    } else {
                        await this.sidenav.close();
                    }
                }),
            )
            .subscribe();
    }

    /**
     * 导航页面
     */
    async onNavigate(target?: NavigateEvent): Promise<void> {
        if (target) {
            await this.router.navigateByUrl(target.path + target.hash);
        } else {
            await this.router.navigate(['error', 404], { replaceUrl: true });
        }
    }
}
