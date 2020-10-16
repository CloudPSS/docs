import { Subscription, merge, Observable } from 'rxjs';
import { tap, share } from 'rxjs/operators';
import { resizing } from '../utils';
import { MdComponentBase } from './base';
import type { Mermaid } from 'mermaid';
import { GlobalService, Theme } from '@/services/global';
import { injector } from '@/constants';

/**
 * mermaid 流程图组件
 */
export class MdMermaid extends MdComponentBase {
    /** @inheritdoc */
    static tagName = 'pre-md-mermaid';
    /** 提供主题服务 */
    static global: GlobalService;
    /** 监视主题更改 */
    private static watchTheme: Observable<Theme>;
    /** mermaid */
    private static mermaid: Mermaid;
    /** 渲染 */
    private rerender?: Subscription;
    /**
     * @inheritdoc
     */
    static async initImpl(): Promise<void> {
        this.mermaid = (await import('mermaid')).default;
        this.global = injector.get(GlobalService);
        if (!this.watchTheme) {
            this.watchTheme = this.global.theme.pipe(
                tap((theme) => {
                    this.mermaid.initialize({
                        theme: this.global.isDark(theme) ? 'dark' : 'default',
                    });
                }),
                share(),
            );
        }
    }
    /**
     * @inheritdoc
     */
    async connectedCallback(): Promise<void> {
        const code = this.dataset.source ?? this.textContent ?? '';
        this.dataset.source = code;
        this.innerHTML = '';
        const id = `mermaid_${Math.floor(Math.random() * 10000000000)}`;
        await MdMermaid.init();
        const mermaid = MdMermaid.mermaid;
        const render = (): void => {
            this.innerHTML = `<div id="${id}"></div>`;
            mermaid.render(
                id,
                code,
                (svg, func) => {
                    this.innerHTML = svg;
                    func?.(this);
                },
                (this as unknown) as string,
            );
        };
        this.rerender = merge(resizing(this), MdMermaid.watchTheme).subscribe(render);
        render();
    }
    /**
     * @inheritdoc
     */
    disconnectedCallback(): void {
        this.rerender?.unsubscribe();
    }
}
