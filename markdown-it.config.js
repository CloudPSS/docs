const markdownIt = require('markdown-it');
const { escapeHtml } = require('markdown-it/lib/common/utils');

/**
 *
 * @param {markdownIt.Options} options
 */
module.exports = function (
    options = {
        html: true,
        typographer: true,
        highlight: (string, lang) => {
            return `<pre><code is="md-highlight" language="${escapeHtml(lang)}">${escapeHtml(string)}</code></pre>`;
        },
        frontMatter: () => {},
    },
) {
    customElements.define(
        'md-highlight',
        class extends HTMLElement {
            constructor() {
                super();
            }
            connectedCallback() {
                const lang = this.getAttribute('language');
                const highlighter = Prism.languages[lang];
                const code = this.innerText;
                if (highlighter) {
                    this.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
                } else {
                    Prism.plugins.autoloader.loadLanguages(lang, () => {
                        this.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
                    });
                }
            }
        },
        { extends: 'code' },
    );
    const md = markdownIt(options);

    /** @type {Array<[string, {
     *      validate?(params:string): boolean;
     *      render?(tokens: import('markdown-it/lib/token')[], idx: number): string;
     *      marker?: string;
     * }]>} */
    const containers = [
        [
            'summary',
            {
                render(tokens, idx) {
                    var m = tokens[idx].info.trim().match(/^\S+\s+(.*)$/);
                    const summary = m?.[1];

                    if (tokens[idx].nesting === 1) {
                        if (summary) return `<details><summary>${escapeHtml(m[1])}</summary>\n`;
                        else return '<details>\n';
                    } else {
                        return '</details>\n';
                    }
                },
            },
        ],
        ...['warning', 'info'].map((name) => [
            name,
            {
                render(tokens, idx) {
                    var m = tokens[idx].info.trim().match(/^\S+\s+(.*)$/);
                    const summary = m?.[1];

                    if (tokens[idx].nesting === 1) {
                        if (summary) {
                            return `<div is="md-container" class="${escapeHtml(name)}"><summary>${escapeHtml(
                                m[1],
                            )}</summary>\n`;
                        } else {
                            return `<div is="md-container" class="${escapeHtml(name)}">\n`;
                        }
                    } else {
                        return '</div>\n';
                    }
                },
            },
        ]),
    ];
    /** @type {[import('markdown-it').PluginWithParams, ...any][]} */
    const plugins = [
        [require('markdown-it-emoji')],
        [require('markdown-it-sub')],
        [require('markdown-it-sup')],
        [require('markdown-it-deflist')],
        [require('markdown-it-abbr')],
        [require('markdown-it-footnote')],
        [require('markdown-it-ins')],
        [require('markdown-it-mark')],
        [require('@iktakahiro/markdown-it-katex')],
        [require('markdown-it-imsize'), { autofill: false }],
        [require('markdown-it-multimd-table')],
        [require('markdown-it-center-text')],
        [require('markdown-it-kbd')],
        [
            require('markdown-it-anchor'),
            {
                slugify: (s) => String(s).trim().toLowerCase().replace(/\s+/g, '-'),
                permalink: true,
                permalinkHref: (slug) => md.normalizeLink(`#${slug}`),
            },
        ],
        [require('markdown-it-front-matter'), options.frontMatter],
        ...containers.map((v) => [require('markdown-it-container'), ...v]),
    ];
    return plugins.reduce((i, [plugin, ...options]) => {
        if (typeof plugin != 'function' && typeof plugin.default == 'function') {
            plugin = plugin.default;
        }
        return i.use(plugin, ...options);
    }, md);
};
