import { Component, Input, OnChanges, ElementRef, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { SourceService } from '@/services/source';
import { RenderService } from '@/services/render';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { map, tap } from 'rxjs/operators';
import { File } from '@/services/source/interfaces';
import { TranslateService } from '@ngx-translate/core';
import { combineLatest } from 'rxjs';
import { I18nService } from '@/services/i18n';
import { DocumentItem } from '@/interfaces/manifest';
import { Router } from '@angular/router';

/**
 * 显示md文档
 */
@Component({
    selector: 'app-navbar',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class NavbarComponent {
    constructor(readonly source: SourceService, readonly i18n: I18nService, readonly router: Router) {}

    /** */
    readonly nav = combineLatest([this.i18n.lang, this.source.current]).pipe(
        tap((x) => console.log(x)),
        map(([lang, info]) => info.manifest.sitemap[lang].children),
        tap((x) => console.log(x)),
    );

    /**
     *
     */
    async navigate(item: DocumentItem): Promise<void> {
        if (item.path) {
            await this.router.navigateByUrl(item.path.parsed);
        }
    }
}
