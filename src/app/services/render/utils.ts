import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, mapTo } from 'rxjs/operators';

/**
 * 元素大小变化
 */
export function resizing(el: HTMLElement): Observable<void> {
    return fromEvent(window, 'resize').pipe(
        debounceTime(100),
        map(() => `${el.scrollWidth},${el.scrollHeight}`),
        distinctUntilChanged(),
        mapTo(undefined),
    );
}
