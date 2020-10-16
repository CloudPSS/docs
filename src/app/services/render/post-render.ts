import MarkdownIt from 'markdown-it';
import { slugify } from './utils';

declare module 'markdown-it' {
    /**
     * MarkdownIt
     */
    export interface MarkdownItExt extends MarkdownIt {
        /**
         * 渲染为 HTMLTemplateElement
         */
        renderFragment(value: string, env?: unknown): HTMLTemplateElement;
    }
}

const markdownIt = MarkdownIt.prototype as MarkdownIt.MarkdownItExt;
// eslint-disable-next-line @typescript-eslint/unbound-method
const render = markdownIt.render;
markdownIt.renderFragment = function (src: string, env?: unknown): HTMLTemplateElement {
    const r = render.call(this, src, env);
    if (!document) {
        return { innerHTML: r } as HTMLTemplateElement;
    }
    const t = document.createElement('template');
    t.innerHTML = r;
    t.content.querySelectorAll<HTMLTableCaptionElement>('table > caption').forEach((e) => {
        (e.parentElement as HTMLTableElement).id = slugify(e.innerText);
    });
    t.content.querySelectorAll<HTMLElement>('figure > figcaption').forEach((e) => {
        (e.parentElement as HTMLElement).id = slugify(e.innerText);
    });
    t.content.querySelectorAll<HTMLIFrameElement>('.block-embed > iframe').forEach((e) => {
        const hint = document.createElement('p');
        hint.classList.add('block-embed-hint');
        hint.innerText = e.src;
        (e.parentElement as HTMLElement).appendChild(hint);
    });
    t.content.querySelectorAll<HTMLElement>('pre > code').forEach((e) => {
        e.setAttribute('is', 'md-highlight');
        (e.parentElement as HTMLPreElement).classList.add('mat-elevation-z2');
    });
    t.content.querySelectorAll<HTMLElement>('dl, blockquote, [is=md-container]').forEach((e) => {
        e.classList.add('mat-elevation-z1');
    });
    return t;
};
markdownIt.render = function (src: string, env: unknown): string {
    return this.renderFragment(src, env).innerHTML;
};
