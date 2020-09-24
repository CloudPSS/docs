import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute, UrlSegment, RouterEvent } from '@angular/router';
import { map, tap, filter } from 'rxjs/operators';

/**
 * 提供文档内容
 */
@Injectable({
    providedIn: 'root',
})
export class I18nService {
    constructor(private readonly translate: TranslateService, private readonly router: Router) {
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => this.lang.next(event.lang));
        this.router.events
            .pipe(
                filter((e): e is RouterEvent => e instanceof RouterEvent),
                map((e) => e.url.split('/').find((s) => !!s)),
                filter((lang): lang is string => !!lang && this.translate.langs.includes(lang)),
            )
            .subscribe((e) => this.setLang(e));
    }

    /** 当前语言 */
    lang = new BehaviorSubject<string>(this.translate.currentLang);

    /**
     * 根据路由设置语言
     */
    private setLang(lang: string): void {
        this.translate.use(lang);
        const html = document.querySelector('html');
        if (html) {
            html.lang = lang;
        }
    }
}
