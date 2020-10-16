import { Injector, InjectionToken, Type, AbstractType } from '@angular/core';

/**
 * DI token
 */
type Token<T> = Type<T> | InjectionToken<T> | AbstractType<T>;

/**
 * 检查 token 是否匹配
 */
function isToken<T>(expected: Token<T>, provided: unknown, value: unknown): value is T {
    return expected === provided;
}

/**
 * 初始化全局变量
 */
export function initInjectable<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, value: T): void {
    if (isToken(Injector, token, value)) {
        injector = value;
    }
}

export let injector: Injector;
