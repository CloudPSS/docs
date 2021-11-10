import type katexModule from 'katex';
import { MdComponentBase } from './base';
import { escapeHtml } from 'markdown-it/lib/common/utils';

/** katex */
let katex: typeof katexModule;
/** asciimathToLatex */
// let asciimathToLatex: (asciimath: string) => string;

/**
 * 一种公式语言
 */
type Language = {
    copyDelimiters: Record<MathMode, [string, string]>;
    /**
     * 渲染公式
     */
    render(this: MdMath, source: string, mode: MathMode): void | Promise<void>;
};

const languages: Record<string, Language | { aliasOf: string }> = {
    tex: {
        copyDelimiters: {
            inline: ['$', '$'],
            display: ['$$ ', ' $$'],
        },
        render(source: string, mode: 'display' | 'inline'): void {
            katex.render(source, this, {
                displayMode: mode === 'display',
            });
        },
    },
    latex: { aliasOf: 'tex' },
    katex: { aliasOf: 'tex' },
    // asciimath: {
    //     copyDelimiters: {
    //         inline: ['\\(', '\\)'],
    //         display: ['\\[ ', ' \\]'],
    //     },
    //     render(source: string, mode: 'display' | 'inline'): void | Promise<void> {
    //         const tex = asciimathToLatex(source);
    //         return (languages.tex as Language).render.call(this, tex, mode);
    //     },
    // },
};

/**
 * 将 md-math 中的内容替换为源
 */
function replaceMathText(fragment: DocumentFragment): void {
    const math = fragment.querySelectorAll<MdMath>(`${MdMath.tagName}[language]`);
    math.forEach((el) => {
        const source = el.dataset['source'] ?? '';
        if (!source) return;
        const lang = el.getAttribute('language');
        const mode = el.getAttribute('mode') === 'display' ? 'display' : 'inline';
        if (!lang || !(lang in languages)) {
            return;
        }
        const d = (languages[lang] as Language).copyDelimiters[mode];
        el.textContent = `${d[0]}${source}${d[1]}`;
    });
}

/**复制 */
function onCopy(event: HTMLElementEventMap['copy']): void {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !event.clipboardData) {
        return;
    }
    const fragment = selection.getRangeAt(0).cloneContents();
    if (!fragment.querySelector(MdMath.tagName)) {
        return;
    }
    // Preserve usual HTML copy/paste behavior.
    const html: string[] = [];
    fragment.childNodes.forEach((node) => {
        html.push((node as Element).outerHTML);
    });
    event.clipboardData.setData('text/html', html.join(''));
    replaceMathText(fragment);
    // Rewrite plain-text version.
    event.clipboardData.setData('text/plain', fragment.textContent ?? '');
    // Prevent normal copy handling.
    event.preventDefault();
}

/**
 * 公式模式
 */
type MathMode = 'inline' | 'display';

/**
 * 公式组件
 */
export class MdMath extends MdComponentBase {
    /** @inheritdoc */
    static override tagName = 'md-math';
    /**
     * @inheritdoc
     */
    protected static override async initImpl(): Promise<void> {
        katex = (await import('katex')).default;
        // asciimathToLatex = (await import('asciimath-to-latex')).default;
        document.addEventListener('copy', onCopy);
    }
    /**
     * @inheritdoc
     */
    override async connectedCallback(): Promise<void> {
        let lang = (this.getAttribute('language') ?? '').toLowerCase();
        let langDef: Language | undefined;
        while (lang) {
            if (!(lang in languages)) {
                lang = '';
                break;
            }
            const langDefTemp = languages[lang];
            if ('aliasOf' in langDefTemp) {
                lang = langDefTemp.aliasOf;
            } else {
                langDef = langDefTemp;
                break;
            }
        }
        this.setAttribute('language', lang);

        const mode = (this.getAttribute('mode') ?? 'inline').toLowerCase() as MathMode;
        this.setAttribute('mode', mode);

        const source = (this.dataset['source'] ?? this.textContent ?? '').trim();
        this.dataset['source'] = source;

        if (!langDef) {
            this.innerHTML = `<span class="error">Unsupported language ${lang}</span>`;
            return;
        }
        await MdMath.init();
        try {
            await langDef.render.call(this, source, mode);
        } catch (ex) {
            this.innerHTML = `<span class="error" title="${escapeHtml(String(ex))}">${escapeHtml(source)}</span>`;
        }
    }
}
