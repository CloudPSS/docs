import { Component } from '@angular/core';
import { SourceService } from '@/services/source';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { NavBaseComponent } from '../nav-base';
import { GlobalService } from '@/services/global';

/**
 * 显示md文档
 */
@Component({
    selector: 'app-navbar',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class NavbarComponent extends NavBaseComponent {
    constructor(readonly source: SourceService, readonly global: GlobalService) {
        super();
    }

    /** 导航栏列表 */
    readonly nav = combineLatest([this.global.language, this.source.current]).pipe(
        map(([lang, info]) => info.manifest.sitemap[lang].children.filter((c) => c.order != null)),
    );
}
