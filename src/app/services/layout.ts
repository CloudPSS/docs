import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

/**
 * 响应式设计服务
 */
@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    constructor(readonly breakpointObserver: BreakpointObserver) {}

    /** 显示模式 */
    readonly displayMode = combineLatest([
        this.breakpointObserver.observe([Breakpoints.XSmall]),
        this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium]),
    ]).pipe(
        map(([s, m]) => {
            if (s.matches) return 'small';
            if (m.matches) return 'medium';
            return 'large';
        }),
        distinctUntilChanged(),
    );

    /** 侧边栏模式 */
    readonly sidenavMode: Observable<MatDrawerMode> = this.displayMode.pipe(
        map((s) => (s === 'small' ? 'over' : s === 'medium' ? 'push' : 'side')),
    );
}
