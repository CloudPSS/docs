const markdownIt = require('markdown-it');
const { escapeHtml } = require('markdown-it/lib/common/utils');
/** @type {import('mermaid').Mermaid} */
const mermaid = require('mermaid');
const { fromEvent } = require('rxjs');
const { map, debounceTime, distinctUntilChanged } = require('rxjs/operators');
const chartJs = require('chart.js');

function loadCustomElements() {
    customElements.define(
        'md-highlight',
        class extends HTMLElement {
            static loading;
            static async loadPrism(version = '^1') {
                if ('Prism' in window) return;
                if (this.loading) return this.loading;
                this.loading = (async () => {
                    const link = document.createElement('link');
                    link.href = `https://unpkg.com/prismjs@${version}/themes/prism.css`;
                    link.rel = 'stylesheet';
                    const script = document.createElement('script');
                    script.src = `https://unpkg.com/prismjs@${version}/components/prism-core.min.js`;
                    const plugins = document.createElement('script');
                    plugins.src = `https://unpkg.com/prismjs@${version}/plugins/autoloader/prism-autoloader.min.js`;
                    const l1 = new Promise((resolve, reject) => {
                        script.addEventListener('load', resolve);
                        script.addEventListener('error', reject);
                    });
                    document.documentElement.append(link, script);
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
                })();
                return this.loading;
            }
            async connectedCallback() {
                const lang = this.getAttribute('language');
                await this.constructor.loadPrism();
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

    /** @param {HTMLElement} el */
    function resizing(el) {
        return fromEvent(window, 'resize').pipe(
            debounceTime(100),
            map(() => `${el.scrollWidth},${el.scrollHeight}`),
            distinctUntilChanged(),
        );
    }

    customElements.define(
        'pre-md-mermaid',
        class extends HTMLElement {
            connectedCallback() {
                const id = 'mermaid_' + Math.floor(Math.random() * 10000000000);
                const code = this.textContent;
                console.log(code);
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
                const rerender = resizing(this).subscribe(render);
                this.disconnectedCallback = function () {
                    rerender.unsubscribe();
                };
                render();
            }
        },
    );
    customElements.define(
        'pre-md-chart',
        class extends HTMLElement {
            connectedCallback() {
                const code = this.textContent;
                const root = this.attachShadow({ mode: 'closed' });
                try {
                    /** @type {import('chart.js').ChartConfiguration} */
                    const opt = JSON.parse(code);
                    opt.options = { ...opt.options, responsive: false };
                    this.style.display = 'block';
                    const canvas = document.createElement('canvas');
                    root.appendChild(canvas);
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
                    const rerender = resizing(this).subscribe(render);
                    this.disconnectedCallback = function () {
                        rerender.unsubscribe();
                    };
                } catch (ex) {
                    root.innerText = String(ex);
                }
            }
        },
    );
    return (string, lang) => {
        const code = escapeHtml(string);
        switch (lang) {
            case 'mermaid':
            case 'chart':
                return `<pre-md-${lang}>${code}</pre-md-${lang}>`;
            default:
                const l = escapeHtml(lang);
                return `<pre><code is="md-highlight" language="${l}">${code}</code></pre>`;
        }
    };
}

/**
 *
 * @param {markdownIt.Options} options
 */
module.exports = function (
    options = {
        html: true,
        typographer: true,
        frontMatter: () => {},
    },
) {
    if (options.highlight == null && customElements) {
        options.highlight = loadCustomElements();
    }
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
        ...['tip', 'question', 'error', 'warning', 'info', 'success', 'fail'].map((name) => [
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
                permalinkSpace: false,
                permalinkSymbol: '',
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
        [
            require('markdown-it-block-embed'),
            {
                outputPlayerSize: false,
                services: {
                    bilibili: class extends require('markdown-it-block-embed/lib/services/VideoServiceBase') {
                        /** @param {string} reference */
                        extractVideoID(reference) {
                            let match = reference.match(
                                /https?:\/\/(?:www\.|player\.)?bilibili.com\/(?:player.html\?aid=|player.html\?bvid=|video\/)([a-z0-9]+)/i,
                            );
                            const id = match && typeof match[1] === 'string' ? match[1] : reference;
                            if (id.match(/^\d+$/)) return `av${id}`;
                            return id;
                        }
                        /** @param {string} videoID */
                        getVideoUrl(videoID) {
                            const id = videoID.match(/^(av|bv|)(.*)$/i);
                            let idArg;
                            if (id[1] != null && id[1].toLowerCase() === 'bv') {
                                idArg = 'bvid=' + id[0];
                            }
                            if (id[1] != null && id[1].toLowerCase() === 'av') {
                                idArg = 'aid=' + id[2];
                            }
                            if (id[1] == '') {
                                idArg = 'aid=' + id[2];
                            }
                            return `//player.bilibili.com/player.html?${idArg}&as_wide=1&high_quality=1&danmaku=0`;
                        }
                    },
                    youku: class extends require('markdown-it-block-embed/lib/services/VideoServiceBase') {
                        /** @param {string} reference */
                        extractVideoID(reference) {
                            let match = reference.match(/id_([a-z0-9+])/i);
                            return match && typeof match[1] === 'string' ? match[1] : reference;
                        }
                        /** @param {string} videoID */
                        getVideoUrl(videoID) {
                            return `//player.youku.com/embed/${videoID}`;
                        }
                    },
                    tencent: class extends require('markdown-it-block-embed/lib/services/VideoServiceBase') {
                        /** @param {string} reference */
                        extractVideoID(reference) {
                            let match = reference.match(/x\/page\/([a-z0-9+])/i);
                            return match && typeof match[1] === 'string' ? match[1] : reference;
                        }
                        /** @param {string} videoID */
                        getVideoUrl(videoID) {
                            return `//v.qq.com/txp/iframe/player.html?vid=${videoID}&auto=0`;
                        }
                    },
                },
            },
        ],
        ...containers.map((v) => [require('markdown-it-container'), ...v]),
        [require('markdown-it-source-map')],
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
        t.content.querySelectorAll('.block-embed > iframe').forEach((e) => {
            const hint = document.createElement('p');
            hint.classList.add('block-embed-hint');
            hint.innerText = e.src;
            e.parentElement.appendChild(hint);
        });
        return t.innerHTML;
    };

    return md;
};
