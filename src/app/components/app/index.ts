import { Component } from '@angular/core';

/**
 * App 组件
 */
@Component({
    selector: 'app-root',
    templateUrl: './index.html',
    styleUrls: ['./index.scss'],
})
export class AppComponent {
    /** url */
    url!: string;

    /**
     * update
     */
    update(s: string): void {
        console.log(s);
        this.url = s;
    }
}
