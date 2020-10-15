/// <reference types="prismjs" />

import { MdComponentBase } from './base';

/**
 * 高亮组件
 */
export class MdHighlight extends MdComponentBase {
    /** @inheritdoc */
    static tagName = 'md-highlight';
    /**
     * @inheritdoc
     */
    protected static async initImpl(version = '^1'): Promise<void> {
        if ('Prism' in window && 'autoloader' in window.Prism.plugins) return;
        const script = document.createElement('script');
        script.src = `https://unpkg.com/prismjs@${version}/components/prism-core.min.js`;
        const plugins = document.createElement('script');
        plugins.src = `https://unpkg.com/prismjs@${version}/plugins/autoloader/prism-autoloader.min.js`;
        const l1 = new Promise((resolve, reject) => {
            script.addEventListener('load', resolve);
            script.addEventListener('error', reject);
        });
        document.documentElement.append(script);
        await l1;
        const l2 = new Promise((resolve, reject) => {
            plugins.addEventListener('load', resolve);
            plugins.addEventListener('error', reject);
        });
        document.documentElement.append(plugins);
        await l2;
        await new Promise((resolve) => setTimeout(resolve, 1));
        script.remove();
        plugins.remove();
        return;
    }
    /**
     * @inheritdoc
     */
    async connectedCallback(): Promise<void> {
        const lang = this.getAttribute('language');
        if (!lang) return;
        await MdHighlight.init();
        const Prism = window.Prism;
        const highlighter = Prism.languages[lang];
        const code = this.textContent ?? '';
        if (highlighter) {
            this.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
        } else {
            const autoloader = Prism.plugins.autoloader as {
                loadLanguages: (name: string, callback: () => void) => void;
            };
            autoloader.loadLanguages(lang, () => {
                this.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
            });
        }
    }
}
