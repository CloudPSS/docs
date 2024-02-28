import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { mdxOptions } from './docusaurus/mdx';
import navbars from './docusaurus/navbars';
import footers from './docusaurus/footers';
import i18n from './docusaurus/i18n';
import plugins from './docusaurus/plugins';
import prism from './docusaurus/prism';
import { translateConfig } from './docusaurus/utils';

let baseUrl = process.env['DOCS_BASE_URL'] ?? '';
if (!baseUrl.endsWith('/')) baseUrl += '/';

const config: Config = {
    title: translateConfig({
        'zh-hans': 'CloudPSS 文档',
    }),
    tagline: translateConfig({
        'zh-hans': '云仿真 / 云同步 / 云协作',
    }),

    favicon: 'icons/favicon.ico',

    // Set the production url of your site here
    url: 'https://docs.cloudpss.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'CloudPSS', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n,

    markdown: {
        mermaid: true,
        remarkRehypeOptions: {
            footnoteLabelProperties: { className: ['visually-hidden'] },
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
                    editUrl: 'https://github.com/CloudPSS/Docs/blob/main/',
                    ...mdxOptions,
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/CloudPSS/Docs/blob/main/',
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
            config: {
                container: '.medium-zoom-container',
            },
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
