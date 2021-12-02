import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, mapTo } from 'rxjs/operators';
import MarkdownIt, { PluginWithParams } from 'markdown-it';

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

/**
 * 加载插件
 */
export function loadPlugin(plugin: unknown): PluginWithParams {
    if (typeof plugin == 'function') return plugin as PluginWithParams;
    const esm = plugin as { default: unknown };
    if (typeof esm.default == 'function') return esm.default as PluginWithParams;
    return plugin as PluginWithParams;
}

/**
 * 扩展插件
 */
export function extend(plugin: unknown, load: (md: MarkdownIt, usePlugin: () => void) => void): PluginWithParams {
    const p = loadPlugin(plugin);
    return (md, ...params: unknown[]) => {
        load(md, () => {
            md.use(p, ...params);
        });
    };
}

/**
 * 生成 id
 */
export function slugify(s: string): string {
    return String(s).trim().replace(/\s/g, '-').toLowerCase();
}
