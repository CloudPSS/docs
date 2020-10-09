const markdownIt = require('markdown-it');
const { escapeHtml } = require('markdown-it/lib/common/utils');
/** @type {import('mermaid').Mermaid} */
const mermaid = require('mermaid');
const { fromEvent } = require('rxjs');
const { debounceTime } = require('rxjs/operators');
const chartJs = require('chart.js');

/**
 *
 * @param {markdownIt.Options} options
 */
module.exports = function (
    options = {
        html: true,
        typographer: true,
        highlight: (string, lang) => {
            return `<pre ${escapeHtml(lang)}><code is="md-highlight" language="${escapeHtml(lang)}">${escapeHtml(
                string,
            )}</code></pre>`;
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
            /** @type {Record<string, (this:HTMLElement)=>void>} */
            static custom = {
                mermaid: function () {
                    const id = 'mermaid_' + Math.floor(Math.random() * 10000000000);
                    this.style.display = 'block';
                    const code = this.innerText;
                    const render = () => {
                        console.log('render', id);
                        this.innerHTML = `<div id="${id}"></div>`;
                        mermaid.render(
                            id,
                            code,
                            (svg, func) => {
                                this.innerHTML = svg;
                                func?.(this);
                            },
                            this,
                        );
                    };
                    const rerender = fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(render);
                    this.disconnectedCallback = function () {
                        rerender.unsubscribe();
                    };
                    render();
                },
                chart: function () {
                    const code = this.innerText;
                    this.innerText = '';
                    try {
                        /** @type {import('chart.js').ChartConfiguration} */
                        const opt = JSON.parse(code);
                        opt.options = { ...opt.options, responsive: false };
                        this.style.display = 'block';
                        const canvas = document.createElement('canvas');
                        this.appendChild(canvas);
                        canvas.style.maxWidth = '800px';
                        const chart = new chartJs(canvas, opt);
                        const render = () => {
                            canvas.style.width = '100%';
                            canvas.style.height = '';
                            chart.resize();
                            canvas.style.width = '100%';
                            canvas.style.height = '';
                        };
                        render();
                        const rerender = fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(render);
                        this.disconnectedCallback = function () {
                            rerender.unsubscribe();
                        };
                    } catch (ex) {
                        this.innerText = String(ex);
                    }
                },
            };
            connectedCallback() {
                const lang = this.getAttribute('language');
                if (lang in this.constructor.custom) {
                    this.constructor.custom[lang].call(this);
                    return;
                }
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
    let md = markdownIt(options);

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
        [
            (md) => {
                md.use(require('markdown-it-footnote'));
                md.renderer.rules.footnote_ref = function render_footnote_ref(tokens, idx, options, env, slf) {
                    const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
                    const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
                    let refid = id;

                    if (tokens[idx].meta.subId > 0) {
                        refid += ':' + tokens[idx].meta.subId;
                    }
                    const href = md.normalizeLink(`#fn${id}`);
                    return `<sup class="footnote-ref"><a href="${href}" id="fnref${refid}">${caption}</a></sup>`;
                };
                md.renderer.rules.footnote_anchor = function render_footnote_anchor(tokens, idx, options, env, slf) {
                    var id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

                    if (tokens[idx].meta.subId > 0) {
                        id += ':' + tokens[idx].meta.subId;
                    }

                    const href = md.normalizeLink(`#fnref${id}`);
                    /* ↩ with escape code to prevent display as Apple Emoji on iOS */
                    return ` <a href="${href}" class="footnote-backref">\u21a9\uFE0E</a>`;
                };
            },
        ],
        [require('@iktakahiro/markdown-it-katex')],
        [require('markdown-it-deflist')],
        [require('markdown-it-abbr')],
        [require('markdown-it-ins')],
        [require('markdown-it-mark')],
        [require('markdown-it-imsize'), { autofill: false }],
        [
            require('markdown-it-multimd-table'),
            {
                multiline: true,
                rowspan: true,
                headerless: true,
            },
        ],
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
        [
            require('markdown-it-block-embed'),
            {
                outputPlayerSize: false,
            },
        ],
        [require('markdown-it-implicit-figures'), { figcaption: true }],
        ...containers.map((v) => [require('markdown-it-container'), ...v]),
    ];
    md = plugins.reduce((i, [plugin, ...options]) => {
        if (typeof plugin != 'function' && typeof plugin.default == 'function') {
            plugin = plugin.default;
        }
        return i.use(plugin, ...options);
    }, md);

    const render = md.render.bind(md);
    md.render = (src, env) => {
        const r = render(src, env);
        if (!document) {
            return r;
        }
        const t = document.createElement('template');
        t.innerHTML = r;
        t.content.querySelectorAll('table > caption').forEach((e) => {
            e.parentElement.id = e.innerText;
        });
        t.content.querySelectorAll('figure > figcaption').forEach((e) => {
            e.parentElement.id = e.innerText;
        });
        return t.innerHTML;
    };

    return md;
};
