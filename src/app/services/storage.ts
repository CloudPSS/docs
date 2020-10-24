import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge, of, Subject } from 'rxjs';
import { filter, map, distinctUntilChanged, shareReplay } from 'rxjs/operators';
import { JsonValue } from 'type-fest';

const storage = window.localStorage;

/**
 * 默认值
 */
type Default<T extends JsonValue> = T | (() => T);

/**
 *  获取存储
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
    private readonly check = new Subject<string | null>();

    /**
     * 设置存储内容
     */
    set<T extends JsonValue>(key: string, value: T | undefined): void {
        const v = JSON.stringify(value);
        if (v == null) {
            storage.removeItem(key);
        } else {
            storage.setItem(key, v);
        }
        this.check.next(key);
    }

    /**
     * 解析存储原始内容
     */
    private parse<T extends JsonValue>(value: string): [true, T] | [false] {
        try {
            return [true, JSON.parse(value) as T];
        } catch {
            return [false];
        }
    }

    /**
     * 获取存储内容
     */
    private getImpl<T extends JsonValue>(key: string, value: string | null, def?: Default<T>): T {
        if (value != null) {
            const ret = this.parse<T>(value);
            if (ret[0]) return ret[1];
        }
        if (typeof def == 'function') {
            def = def();
        }
        this.set<T>(key, def as T);
        return def as T;
    }

    /**
     * 获取存储内容
     */
    get<T extends JsonValue>(key: string, def?: Default<T>): T {
        const current = storage.getItem(key);
        return this.getImpl(key, current, def);
    }

    /**
     * 获取存储内容
     */
    watch<T extends JsonValue>(key: string, def?: Default<T>): Observable<T> {
        this.get(key, def);
        return merge(of(null), this.check).pipe(
            filter((k) => k === key || k == null),
            map(() => storage.getItem(key)),
            distinctUntilChanged(),
            map((v) => this.getImpl(key, v, def)),
            shareReplay(1),
        );
    }
}
