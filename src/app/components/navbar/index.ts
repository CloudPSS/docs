import { Component } from '@angular/core';
import { SourceService } from '@/services/source';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { I18nService } from '@/services/i18n';
import { NavBaseComponent } from '../nav-base';

/**
 * 显示md文档
 */
@Component({
    selector: 'app-navbar',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class NavbarComponent extends NavBaseComponent {
    constructor(readonly source: SourceService, readonly i18n: I18nService) {
        super();
    }

    /** 导航栏列表 */
    readonly nav = combineLatest([this.i18n.lang, this.source.current]).pipe(
        map(([lang, info]) => info.manifest.sitemap[lang].children.filter((c) => c.order != null)),
    );
}
