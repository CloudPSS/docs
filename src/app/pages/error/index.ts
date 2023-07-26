import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * 错误页面组件
 */
@Component({
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class ErrorComponent {
    constructor(
        readonly route: ActivatedRoute,
        readonly router: Router,
    ) {}
}
