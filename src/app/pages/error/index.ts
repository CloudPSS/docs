import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { NavigateEvent } from '@/components/markdown';

/**
 * 错误页面组件
 */
@Component({
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class ErrorComponent implements OnInit {
    constructor(readonly route: ActivatedRoute, readonly router: Router) {}
    /** url */
    url!: Observable<string>;
    /**
     * @inheritdoc
     */
    ngOnInit(): void {
        this.url = this.route.url.pipe(
            map(() => location.pathname.replace(/\.html?$/i, '.md')),
            tap((s) => console.log(s)),
        );
    }

    /**
     *
     */
    onNavigate(target?: NavigateEvent): void {
        if (target) void this.router.navigateByUrl(target.path);
        else void this.router.navigate(['error', 404], { replaceUrl: true });
    }
}
