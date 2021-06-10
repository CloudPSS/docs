import { MdComponentBase } from './base';
import { Subscription } from 'rxjs';
import type { Chart, ChartConfiguration } from 'chart.js';
import { resizing } from '../utils';

/**
 * chartJs 组件
 */
export class MdChart extends MdComponentBase {
    /** @inheritdoc */
    static tagName = 'pre-md-chart';
    /** chartJs */
    private static chartJs: typeof Chart;
    /** 渲染 */
    private rerender?: Subscription;
    /** 图表配置 */
    config?: ChartConfiguration;
    /**
     * @inheritdoc
     */
    protected static async initImpl(): Promise<void> {
        const { Chart, registerables } = await import('chart.js');
        Chart.register(...registerables);
        this.chartJs = Chart;
    }
    /**
     * @inheritdoc
     */
    async connectedCallback(): Promise<void> {
        const code = this.dataset['source'] ?? this.textContent ?? '{}';
        this.dataset['source'] = code;
        let root: ShadowRoot | this;
        if ('attachShadow' in (this as object)) {
            root = this.attachShadow({ mode: 'open' });
        } else {
            this.innerHTML = '';
            root = this;
        }
        try {
            const config = (this.config = JSON.parse(code) as ChartConfiguration);
            config.options = { ...config.options, responsive: false };
            this.style.display = 'block';
            const canvas = document.createElement('canvas');
            root.appendChild(canvas);
            canvas.style.maxWidth = '800px';
            await MdChart.init();
            const chart = new MdChart.chartJs(canvas, config);
            const render = (): void => {
                canvas.style.width = '100%';
                canvas.style.height = '';
                chart.resize();
                canvas.style.width = '100%';
                canvas.style.height = '';
            };
            render();
            this.rerender = resizing(this).subscribe(render);
        } catch (ex) {
            const p = document.createElement('p');
            p.innerText = String(ex);
            root.appendChild(p);
        }
    }
    /**
     * @inheritdoc
     */
    disconnectedCallback(): void {
        this.rerender?.unsubscribe();
    }
}
