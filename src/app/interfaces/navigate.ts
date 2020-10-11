import { EventEmitter } from '@angular/core';

/**
 * 导航事件
 */
export class NavigateEvent {
    constructor(
        /**
         * 目标路径
         */
        readonly path: string,
        fragment?: string,
    ) {
        if (!fragment) {
            this.fragment = '';
        } else {
            if (fragment.startsWith('#')) fragment = fragment.slice(1);
            this.fragment = fragment;
        }
    }

    /**
     * 目标 fragment
     */
    readonly fragment: string;
    /**
     * 导航路径
     */
    get url(): string {
        if (this.fragment) return `${this.path}#${this.fragment}`;
        return this.path;
    }
}

/**
 * 导航事件源
 */
export interface NavigateEventSource {
    /**
     * 导航事件
     */
    readonly navigate: EventEmitter<NavigateEvent>;
}
