import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwUpdate } from '@angular/service-worker';
import { SourceService } from './services/source';
import { WebpackTranslateLoader } from './webpack-translate-loader';
import { Observable } from 'rxjs';
import { GlobalService } from './services/global';

/**
 * 提供文档内容
 */
@Injectable({
    providedIn: 'root',
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppInitializerService {
    constructor(
        readonly translate: TranslateService,
        readonly updates: SwUpdate,
        readonly source: SourceService,
        readonly global: GlobalService,
    ) {
        return ((() =>
            Promise.all(
                this.initializers.map((i) => {
                    let r = i();
                    if (!r) return r;
                    if ('toPromise' in r) r = r.toPromise();
                    return r;
                }),
            )) as unknown) as AppInitializerService;
    }

    /** 初始化函数 */
    private initializers: Array<() => Promise<void> | void | Observable<void>> = [
        () => {
            this.translate.addLangs(Object.keys(WebpackTranslateLoader.langs));
        },
        () => {
            if (this.updates.isEnabled) {
                this.updates.available.subscribe((event) => {
                    console.log(
                        `Updates from ${event.current.hash} to ${event.available.hash} is currently available.`,
                    );
                });
                this.updates.activated.subscribe((event) => {
                    console.log(`Updated from ${event.previous?.hash ?? 'unknown'} to ${event.current.hash}.`);
                });
            }
        },
        () =>
            this.source.use({
                name: 'latest',
                ref: 'latest',
                status: 'release',
            }),
    ];
}
