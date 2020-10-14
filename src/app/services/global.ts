import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

/**
 * 主题
 */
export type Theme = 'default' | 'dark';

/**
 *  设置全局状态
 */
@Injectable({
    providedIn: 'root',
})
export class GlobalService {
    constructor(private readonly titleService: Title) {
        this.titleSource.subscribe(() => this.updateTitle());
        this.themeSource.subscribe(() => this.updateTheme());
    }

    /** 标题后缀 */
    titleSuffix = `CloudPSS 文档`;

    /** 标题 */
    private titleSource = new BehaviorSubject('');
    /** 主题 */
    private themeSource = new BehaviorSubject<Theme>(
        (localStorage?.getItem('theme') ??
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default')) as Theme,
    );

    /**
     * 标题
     */
    getTitle(): string {
        return this.titleSource.value;
    }
    /**
     * 标题
     */
    setTitle(value: string | undefined): void {
        this.titleSource.next(value ?? '');
    }

    /**
     * 标题
     */
    get title(): Observable<string> {
        return this.titleSource.asObservable();
    }

    /**
     * 更新标题
     */
    private updateTitle(): void {
        const title = this.titleSource.value;
        if (title) {
            this.titleService.setTitle(`${title} - ${this.titleSuffix}`);
        } else {
            this.titleService.setTitle(this.titleSuffix);
        }
    }

    /**
     * 主题
     */
    getTheme(): Theme {
        return this.themeSource.value;
    }
    /**
     * 主题
     */
    setTheme(value: Theme): void {
        this.themeSource.next(value);
    }

    /**
     * 主题
     */
    get theme(): Observable<Theme> {
        return this.themeSource.asObservable();
    }

    /**
     * 更新主题
     */
    private updateTheme(): void {
        const html = document.querySelector('html');
        const theme = this.themeSource.value;
        if (html) {
            html.setAttribute('theme', theme);
            html.setAttribute('color-scheme', this.isDark(theme) ? 'dark' : 'light');
        }
        localStorage.setItem('theme', theme);
    }

    /**
     * 是否为暗色主题
     */
    isDark(theme?: Theme | null): boolean {
        switch (theme) {
            case 'dark':
                return true;
            default:
                return false;
        }
    }
}
