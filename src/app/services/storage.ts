import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { filter, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';

/**
 * 主题
 */
export type Theme = 'default' | 'dark';

const storage = window.localStorage;

/**
 *  设置全局状态
 */
@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor() {
        fromEvent(window, 'focus').subscribe(() => {
            this.check.next(null);
        });
    }

    /** 检查存储更新 */
    private readonly check = new BehaviorSubject<string | null>(null);

    /**
     * 设置存储内容
     */
    set<T>(key: string, value: T): void {
        storage.setItem(key, JSON.stringify(value));
        this.check.next(key);
    }

    /**
     * 解析存储原始内容
     */
    private parse<T>(value: string): [true, T] | [false] {
        try {
            return [true, JSON.parse(value) as T];
        } catch {
            return [false];
        }
    }

    /**
     * 获取存储内容
     */
    private getImpl<T>(key: string, value: string | null, def?: T): T {
        if (value != null) {
            const ret = this.parse<T>(value);
            if (ret[0]) return ret[1];
        }
        this.set(key, def);
        return def as T;
    }

    /**
     * 获取存储内容
     */
    get<T>(key: string, def?: T): T {
        const current = storage.getItem(key);
        return this.getImpl(key, current, def);
    }

    /**
     * 获取存储内容
     */
    watch<T>(key: string, def?: T): Observable<T> {
        this.get(key, def);
        return this.check.pipe(
            filter((k) => k === key || k == null),
            map(() => storage.getItem(key)),
            distinctUntilChanged(),
            map((v) => this.getImpl(key, v, def)),
            shareReplay(),
        );
    }
}
