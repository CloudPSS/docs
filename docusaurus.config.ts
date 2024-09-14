import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { mdxOptions, remarkRehypeOptions } from './docusaurus/mdx';
import navbars from './docusaurus/navbars';
import footers from './docusaurus/footers';
import i18n from './docusaurus/i18n';
import plugins from './docusaurus/plugins';
import prism from './docusaurus/prism';
import { translateConfig, BASE_URL, HOME_URL, DEV } from './docusaurus/utils';

const config: Config = {
    title: translateConfig({
        'zh-hans': 'CloudPSS 知识库',
    }),
    tagline: translateConfig({
        'zh-hans': '构建开源、开放、协作、共享的 CloudPSS 生态',
    }),

    favicon: 'icons/favicon.ico',

    // Set the production url of your site here
    url: 'https://kb.cloudpss.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: BASE_URL,
    trailingSlash: true,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'CloudPSS', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    onBrokenLinks: DEV ? 'warn' : 'throw',
    onBrokenAnchors: DEV ? 'warn' : 'throw',
    onBrokenMarkdownLinks: DEV ? 'warn' : 'throw',
    onDuplicateRoutes: DEV ? 'warn' : 'throw',

    customFields: {
        HOME_URL,
    },

    i18n,

    markdown: {
        mermaid: true,
        remarkRehypeOptions: {
            ...remarkRehypeOptions,
            clobberPrefix: '',
            footnoteLabelProperties: { className: ['visually-hidden'] },
            footnoteBackContent(referenceIndex, rereferenceIndex) {
                const main = { type: 'text', value: '\u21A9\uFE0E' } as const;
                if (rereferenceIndex <= 1) {
                    return [main];
                }
                return [
                    main,
                    {
                        type: 'element',
                        tagName: 'sup',
                        properties: {},
                        children: [{ type: 'text', value: String(rereferenceIndex) }],
                    },
                ];
            },
            ...translateConfig({
                'zh-hans': {
                    footnoteLabel: '脚注',
                    footnoteBackLabel(referenceIndex, rereferenceIndex) {
                        return `返回引文位置 ${referenceIndex + 1}${rereferenceIndex > 1 ? '-' + rereferenceIndex : ''}`;
                    },
                },
            }),
        },
    },

    clientModules: ['./src/js/index.ts'],

    themes: ['@docusaurus/theme-mermaid'],

    plugins,

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './docusaurus/sidebars.ts',
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                    onInlineTags: DEV ? 'warn' : 'throw',
                    editUrl: 'https://github.com/CloudPSS/docs/blob/main/',
                    ...mdxOptions,
                },
                blog: {
                    routeBasePath: '/blog',
                    showReadingTime: true,
                    onInlineTags: DEV ? 'warn' : 'throw',
                    onInlineAuthors: DEV ? 'warn' : 'throw',
                    onUntruncatedBlogPosts: DEV ? 'warn' : 'throw',
                    editUrl: 'https://github.com/CloudPSS/docs/blob/main/',
                    blogTitle: '博客',
                    blogDescription: 'CloudPSS 博客',
                    blogSidebarTitle: '最近文章',
                    ...mdxOptions,
                },
                pages: {
                    ...mdxOptions,
                },
                theme: {
                    customCss: './src/css/index.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        // image: 'img/docusaurus-social-card.jpg',
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
        },
        colorMode: {
            defaultMode: 'light',
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'CloudPSS',
            hideOnScroll: false,
            logo: {
                alt: 'CloudPSS',
                src: 'icons/favicon.svg',
                style: {
                    width: '2em',
                    margin: '0 0.5em',
                },
            },
            items: navbars,
        },
        footer: {
            style: 'dark',
            ...footers,
        },
        prism,
        zoom: {
            selector: '.markdown figure > img, .markdown .docusaurus-mermaid-container > svg',
            background: {
                light: 'var(--background)',
                dark: 'var(--background)',
            },
            config: {
                container: '.medium-zoom-container',
            },
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
