import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '@/services/global';
import { Subscription, noop } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

/**
 * App 组件
 */
@Component({
    selector: 'app-root',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    constructor(readonly router: Router, readonly global: GlobalService, readonly translate: TranslateService) {}
    /** 订阅事件 */
    private readonly subscriptions: Subscription[] = [];

    /**
     * 菜单点击
     */
    menuClick: () => void = noop;

    /** @inheritdoc */
    ngOnInit(): void {
        this.subscriptions.push(
            this.global.menuButton.asObservable().subscribe((m) => {
                this.menuClick = m?.click ?? noop;
            }),
        );
    }
    /** @inheritdoc */
    ngOnDestroy(): void {
        this.subscriptions.splice(0).forEach((s) => s.unsubscribe());
    }

    /**
     * 更改主题
     */
    changeTheme(): void {
        if (this.global.isDark(this.global.getTheme())) {
            this.global.setTheme('default');
        } else {
            this.global.setTheme('dark');
        }
    }
}
