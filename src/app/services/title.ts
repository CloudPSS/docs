import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

/**
 *  设置标题
 */
@Injectable({
    providedIn: 'root',
})
export class TitleService {
    constructor(private readonly service: Title) {
        this.source.subscribe(() => this.update());
    }

    /** 标题后缀 */
    suffix = `CloudPSS 文档`;

    /** 标题 */
    private source = new BehaviorSubject('');

    /**
     * 标题
     */
    get title(): string {
        return this.source.value;
    }
    set title(value: string) {
        this.source.next(value);
    }

    /**
     * 标题
     */
    get state(): Observable<string> {
        return this.source.asObservable();
    }

    /**
     * 更新标题
     */
    private update(): void {
        const title = this.source.value;
        if (title) {
            this.service.setTitle(`${title} - ${this.suffix}`);
        } else {
            this.service.setTitle(this.suffix);
        }
    }
}
