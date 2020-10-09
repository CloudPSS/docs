import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * App 组件
 */
@Component({
    selector: 'app-root',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class AppComponent {
    constructor(readonly router: Router) {}
}
