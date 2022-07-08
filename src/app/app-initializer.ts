import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwUpdate } from '@angular/service-worker';
import { SourceService } from './services/source';
import { WebpackTranslateLoader } from './webpack-translate-loader';
import { Observable, firstValueFrom } from 'rxjs';
import { GlobalService } from './services/global';
import { Router, NavigationEnd } from '@angular/router';
import { filter, mergeMap, tap } from 'rxjs/operators';
import pkgJson from 'package.json';

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
        readonly router: Router,
    ) {
        // eslint-disable-next-line no-console
        console.log(`App version ${pkgJson.version}`);
        return (() =>
            Promise.all(
                this.initializers.map((i) => {
                    let r = i();
                    if (!r) return r;
                    if (!('then' in r)) r = firstValueFrom(r);
                    return r;
                }),
            )) as unknown as AppInitializerService;
    }

    /** 初始化函数 */
    private initializers: Array<() => Promise<void> | void | Observable<void>> = [
        () => {
            this.translate.addLangs(Object.keys(WebpackTranslateLoader.langs));
        },
        () => {
            if (this.updates.isEnabled) {
                this.updates.versionUpdates.subscribe((event) => {
                    if (event.type === 'VERSION_READY') {
                        // eslint-disable-next-line no-console
                        console.log(
                            `Updates from ${event.currentVersion.hash} to ${event.latestVersion.hash} is currently available.`,
                        );
                        this.router.events
                            .pipe(
                                filter((ev) => ev instanceof NavigationEnd),
                                mergeMap(() => this.updates.activateUpdate()),
                                tap(() => {
                                    // eslint-disable-next-line no-console
                                    console.log(
                                        `Updated from ${event.currentVersion.hash} to ${event.latestVersion.hash}.`,
                                    );
                                }),
                            )
                            .subscribe(() => document.location.reload());
                    }
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
