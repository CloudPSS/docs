import { Injector } from '@angular/core';

/**
 * 初始化全局变量
 */
export function initInjectable<T>(value: T): void {
    if (value instanceof Injector && !injector) {
        injector = value;
    }
}

export let injector: Injector;
