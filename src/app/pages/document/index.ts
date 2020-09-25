import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable, combineLatest, interval } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, pluck, delay, mergeMap } from 'rxjs/operators';
import { NavigateEvent } from '@/components/markdown';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LayoutService } from '@/services/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { NavListComponent } from '@/components/nav-list';

/**
 * 文档页面组件
 */
@Component({
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class DocumentComponent implements AfterViewInit {
    constructor(readonly route: ActivatedRoute, readonly router: Router, readonly layout: LayoutService) {}
    /** */
    @ViewChild('sidenav') readonly sidenav!: MatSidenav;

    /** url */
    readonly url = this.route.params.pipe(
        map((s) => {
            const lang = s.lang as string;
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
        tap((s) => console.log(s)),
    );

    /** */
    readonly category = this.route.params.pipe<string>(pluck('category'));
    /** @inheritdoc */
    ngAfterViewInit(): void {
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
            .subscribe();
    }

    /**
     *
     */
    onNavigate(target?: NavigateEvent): void {
        if (target) {
            void this.router.navigateByUrl(target.path + target.hash);
        } else {
            void this.router.navigate(['error', 404], { replaceUrl: true });
        }
    }
}
