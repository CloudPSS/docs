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
        hash?: string,
    ) {
        if (!hash) {
            this.hash = '';
        } else {
            if (!hash.startsWith('#')) hash = '#' + hash;
            this.hash = hash;
        }
    }

    /**
     * 目标 hash
     */
    readonly hash: string;
    /**
     * 导航路径
     */
    get url(): string {
        return this.path + this.hash;
    }
}

/**
 * 导航事件源
 */
export interface NavigateEventSource {
    /**
     * 导航事件
     */
    navigate: EventEmitter<NavigateEvent>;
}
