/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import path from 'node:path';
import { themes as prismThemes } from 'prism-react-renderer';
import type { Config, Plugin } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Search from '@easyops-cn/docusaurus-search-local';
import { mdxOptions } from './docusaurus/mdx';
import navbars from './docusaurus/navbars';
import footers from './docusaurus/footers';

let baseUrl = process.env['DOCS_BASE_URL'] ?? '';
if (!baseUrl.endsWith('/')) baseUrl += '/';

const config: Config = {
    title: 'CloudPSS',
    tagline: '云仿真 / 云同步 / 云协作',
    favicon: 'img/logo.ico',

    // Set the production url of your site here
    url: 'https://docs.cloudpss.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'CloudPSS', // Usually your GitHub org/user name.
    projectName: 'Docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: [
            'zh-Hans',
            //'en'
        ],
    },
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './docusaurus/sidebars.ts',
                    showLastUpdateTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/CloudPSS/Docs/blob/main/',
                    ...mdxOptions,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
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

    clientModules: ['./src/js/index.ts'],

    plugins: [
        (): Plugin => {
            return {
                name: 'docusaurus-plugin-postcss-configure',
                configurePostCss(options) {
                    options.plugins.push('postcss-preset-env');
                    return options;
                },
            };
        },
        (context): Plugin => {
            return {
                name: 'docusaurus-plugin-split-config',
                getPathsToWatch() {
                    return [`${path.resolve(context.siteDir)}/docusaurus/**/*.{ts,js}`];
                },
            };
        },
        'docusaurus-plugin-image-zoom',
        [
            '@easyops-cn/docusaurus-search-local',
            {
                docsRouteBasePath: '/',
                blogRouteBasePath: '/blog',
                language: ['zh', 'en'],
                hashed: 'filename',
            } satisfies Search.PluginOptions,
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
                src: 'img/logo.svg',
                style: {
                    width: '2em',
                    margin: '0 0.5em',
                },
            },
            items: navbars,
        },
        footer: {
            style: 'dark',
            links: footers,
            copyright: `<span style="word-spacing: -0.3ch">Copyright © 2015-${new Date().getFullYear()}</span> CloudPSS\u00A0\u00A0<a href="https://beian.miit.gov.cn" class=footer__link-item target=_blank style="word-spacing: -0.3ch">蜀 ICP 备 2020037721 号 - 3</a>`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['java', 'python'],
        },
        zoom: {
            selector: '.markdown figure > img',
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
