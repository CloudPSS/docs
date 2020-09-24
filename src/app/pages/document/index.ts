import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, pluck } from 'rxjs/operators';
import { NavigateEvent } from '@/components/markdown';

/**
 * 文档页面组件
 */
@Component({
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class DocumentComponent {
    constructor(readonly route: ActivatedRoute, readonly router: Router) {}
    /** url */
    readonly url = this.route.params.pipe(
        map((s) => {
            const lang = s.lang as string;
            const category = s.category as string;
            const path: string[] = [];
            for (const key in s) {
                const i = Number.parseInt(key);
                if (!Number.isNaN(i)) {
                    path[i] = s[key] as string;
                }
            }
            if (category) path.unshift(category);
            if (lang) path.unshift(lang);
            path.unshift('');
            return path.join('/');
        }),
        tap((s) => console.log(s)),
    );

    /** */
    readonly category = this.route.params.pipe<string>(pluck('category'));

    /**
     *
     */
    onNavigate(target?: NavigateEvent): void {
        if (target) {
            void this.router.navigateByUrl(target.path + target.hash);
        } else {
            void this.router.navigate(['error', 404], { replaceUrl: true });
        }
    }
}
