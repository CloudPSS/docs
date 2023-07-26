import { slugify } from './utils';

/** 后处理 */
export function postRender(t: HTMLTemplateElement): HTMLTemplateElement {
    t.content.querySelectorAll<HTMLTableCaptionElement>('table > caption').forEach((e) => {
        e.parentElement!.id = slugify(e.textContent ?? '');
    });
    t.content.querySelectorAll<HTMLElement>('figure > figcaption').forEach((e) => {
        e.parentElement!.id = slugify(e.textContent ?? '');
    });
    t.content.querySelectorAll<HTMLElement>('cwe-highlight').forEach((e) => {
        e.classList.add('mat-elevation-z1');
    });
    t.content.querySelectorAll<HTMLElement>('dl, blockquote, details, [is=md-container]').forEach((e) => {
        e.classList.add('mat-elevation-z1');
    });
    return t;
}
