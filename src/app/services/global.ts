import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { StorageService } from './storage';
import { TranslateService } from '@ngx-translate/core';
import { WebpackTranslateLoader } from '@/webpack-translate-loader';

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
    constructor(
        private readonly titleService: Title,
        private readonly storage: StorageService,
        private readonly translateService: TranslateService,
    ) {
        combineLatest([this.titleSource, this.titleSuffix]).subscribe(([title, suffix]) => {
            if (title) {
                this.titleService.setTitle(`${title} - ${suffix}`);
            } else {
                this.titleService.setTitle(suffix);
            }
        });
        this.theme.subscribe((theme) => this.updateTheme(theme));
        this.language.subscribe((lang) => this.updateLanguage(lang));
    }

    /** 标题后缀 */
    private readonly titleSuffix = this.translateService.stream('title') as Observable<string>;

    /** 标题 */
    private readonly titleSource = new BehaviorSubject('');
    /** 主题 */
    readonly theme = this.storage.watch<Theme>(
        'theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'default',
    );
    /** 语言 */
    readonly language = this.storage.watch<string>('language', this.defaultLanguage());

    /** 菜单按钮 */
    readonly menuButton = new EventEmitter<{ icon: string; title: string; click?: () => void } | null>(true);

    /** 导航栏状态 */
    readonly navbar = new EventEmitter<'hidden' | 'simple' | 'visible'>(true);

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
    setDescription(value: string | undefined): void {
        const meta = document.querySelector<HTMLMetaElement>('meta[name=description]');
        if (meta) {
            meta.content = value ?? 'CloudPSS';
        }
    }

    /**
     * 标题
     */
    get title(): Observable<string> {
        return this.titleSource.asObservable();
    }

    /**
     * 主题
     */
    getTheme(): Theme {
        return this.storage.get('theme');
    }
    /**
     * 主题
     */
    setTheme(value: Theme): void {
        this.storage.set('theme', value);
    }

    /**
     * 更新主题
     */
    private updateTheme(theme: Theme): void {
        const html = document.documentElement;
        html.setAttribute('theme', theme);
        html.setAttribute('color-scheme', this.isDark(theme) ? 'dark' : 'light');
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

    /** 默认语言 */
    private defaultLanguage(): string {
        const candidates = (window.navigator.languages ?? [window.navigator.language])
            .map((s) => s.toLowerCase())
            .flatMap((e) => {
                if (e.indexOf('-') > 0) {
                    return [e, e.split('-')[0]];
                } else {
                    return [e];
                }
            });
        const available = Object.fromEntries(
            Object.entries(WebpackTranslateLoader.langs).flatMap(([k, v]) => [
                [k, k] as const,
                ...(v.alias ?? []).map((v) => [v, k] as const),
            ]),
        );
        for (const candidate of candidates) {
            if (candidate in available) {
                return available[candidate];
            }
        }
        return this.translateService.defaultLang;
    }

    /** 语言 */
    getLanguage(): string {
        return this.storage.get('language');
    }
    /** 语言 */
    setLanguage(value: string): void {
        this.storage.set('language', value);
    }

    /**
     * 语言名称
     */
    languageName(lang: string): string {
        return WebpackTranslateLoader.langs[lang].name;
    }

    /** 设置语言 */
    private updateLanguage(value: string): void {
        this.translateService.use(value);
        document.documentElement.lang = value;
    }
}
