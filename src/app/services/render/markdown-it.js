const markdownIt = require('markdown-it');
const { escapeHtml } = require('markdown-it/lib/common/utils');
const { fromEvent, merge } = require('rxjs');
const { map, debounceTime, distinctUntilChanged, tap, share } = require('rxjs/operators');
const VideoServiceBase = require('markdown-it-block-embed/lib/services/VideoServiceBase');

function loadPlugin(plugin) {
    if (typeof plugin != 'function' && typeof plugin.default == 'function') {
        plugin = plugin.default;
    }
    return plugin;
}

/**
 *
 * @param {import('@/services/global').GlobalService} global
 */
function loadCustomElements(global) {
    customElements.define(
        'md-highlight',
        class extends HTMLElement {
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
                const code = this.textContent;
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
            static async initMermaid() {
                /** @type {import('mermaid').Mermaid} */
                const mermaid = await import('mermaid');
                if (!this.watchTheme) {
                    this.watchTheme = global.theme.pipe(
                        tap((theme) => {
                            mermaid.initialize({
                                theme: global.isDark(theme) ? 'dark' : 'default',
                            });
                        }),
                        share(),
                    );
                }
                return mermaid;
            }
            async connectedCallback() {
                const code = this.textContent;
                this.innerHTML = '';
                const id = 'mermaid_' + Math.floor(Math.random() * 10000000000);
                /** @type {import('mermaid').Mermaid} */
                const mermaid = await this.constructor.initMermaid();
                const render = () => {
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
                this.rerender = merge(resizing(this), this.constructor.watchTheme).subscribe(render);
                render();
            }
            rerender;
            disconnectedCallback() {
                this.rerender?.unsubscribe();
            }
        },
    );
    customElements.define(
        'pre-md-chart',
        class extends HTMLElement {
            async connectedCallback() {
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
                    const chartJs = await import('chart.js');
                    const chart = new chartJs.default(canvas, opt);
                    const render = () => {
                        canvas.style.width = '100%';
                        canvas.style.height = '';
                        chart.resize();
                        canvas.style.width = '100%';
                        canvas.style.height = '';
                    };
                    render();
                    this.rerender = resizing(this).subscribe(render);
                } catch (ex) {
                    root.innerText = String(ex);
                }
            }
            rerender;
            disconnectedCallback() {
                this.rerender?.unsubscribe();
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
 * @param {import('@/services/global').GlobalService} global
 * @param {markdownIt.Options} options
 */
module.exports = function (
    global,
    options = {
        html: true,
        typographer: true,
        frontMatter: () => {},
    },
) {
    if (options.highlight == null && customElements) {
        options.highlight = loadCustomElements(global);
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
                render(tokens, idx, opt, env, slf) {
                    const token = tokens[idx];
                    const m = token.info.trim().match(/^\S+\s+(.*)$/);
                    const summary = m?.[1];

                    if (token.nesting === 1) {
                        const detailsOpen = `<details data-source-line="${token.map[0] + 1}">\n`;
                        if (summary) {
                            return `${detailsOpen}<summary>${md.renderInline(summary, {
                                ...env,
                                footnotes: null,
                            })}</summary>\n`;
                        } else {
                            return detailsOpen;
                        }
                    } else {
                        return '</details>\n';
                    }
                },
            },
        ],
        ...['tip', 'question', 'error', 'warning', 'info', 'success', 'fail'].map((name) => [
            name,
            {
                /**
                 * @param {import('markdown-it/lib/token')[]} tokens
                 */
                render(tokens, idx, opt, env, slf) {
                    const token = tokens[idx];
                    const m = token.info.trim().match(/^\S+\s+(.*)$/);
                    const summary = m?.[1];

                    if (token.nesting === 1) {
                        const divOpen = `<div is="md-container" class="${escapeHtml(name)}" data-source-line="${
                            token.map[0] + 1
                        }">\n`;
                        if (summary) {
                            return `${divOpen}<summary>${md.renderInline(summary, {
                                ...env,
                                footnotes: null,
                            })}</summary>\n`;
                        } else {
                            return divOpen;
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
        [require('markdown-it-implicit-figures'), { figcaption: true }],
        [
            (md, opt) => {
                md.use(loadPlugin(require('markdown-it-block-embed')), opt);
                const original = md.renderer.rules['video'];
                md.renderer.rules['video'] = (tokens, idx, opt, env, slf) => {
                    const ret = original(tokens, idx, opt, env, slf);
                    return `<div  data-source-line="${tokens[idx].map[0] + 1}"` + ret.slice('<div'.length);
                };
            },
            {
                outputPlayerSize: false,
                services: {
                    bilibili: class extends VideoServiceBase {
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
                    youku: class extends VideoServiceBase {
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
                    tencent: class extends VideoServiceBase {
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
        return i.use(loadPlugin(plugin), ...options);
    }, md);

    const render = md.render.bind(md);
    md.renderFragment = (src, env) => {
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
        t.content.querySelectorAll('pre > code').forEach((e) => {
            e.setAttribute('is', 'md-highlight');
        });
        return t;
    };
    md.render = (src, env) => {
        return md.renderFragment(src, env).innerHTML;
    };

    return md;
};
