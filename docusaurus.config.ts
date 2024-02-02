import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import remarkIns from 'remark-ins';
import rehypeKatex from 'rehype-katex';
import rehypeFigure from './src/rehype/figure';

const mdxOptions = {
    admonitions: {},
    remarkPlugins: [remarkIns, remarkMath],
    rehypePlugins: [rehypeKatex, rehypeFigure],
    beforeDefaultRemarkPlugins: [],
    beforeDefaultRehypePlugins: [],
};

const config: Config = {
    title: 'CloudPSS',
    tagline: '云仿真 / 云同步 / 云协作',
    favicon: 'img/logo.ico',

    // Set the production url of your site here
    url: 'https://docs.cloudpss.net',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

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
        locales: ['zh-Hans', 'en'],
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
                    sidebarPath: './sidebars.ts',
                    showLastUpdateTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/CloudPSS/Docs/blob/docusaurus/',
                    ...mdxOptions,
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/CloudPSS/Docs/blob/docusaurus/',
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
        'docusaurus-plugin-image-zoom',
        [
            '@easyops-cn/docusaurus-search-local',
            {
                docsRouteBasePath: '/',
                blogRouteBasePath: '/blog',
                language: ['zh', 'en'],
                hashed: 'filename',
            },
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
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'docs',
                    position: 'left',
                    label: '文档',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'meta',
                    position: 'left',
                    label: '编写指南',
                },
                { to: '/blog', label: '博客', position: 'left' },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    type: 'search',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: '清华大学电机工程与应用电子技术系',
                            href: 'https://www.eea.tsinghua.edu.cn/',
                        },
                        {
                            label: '清华大学能源互联网创新研究院',
                            href: 'http://www.eiri.tsinghua.edu.cn/',
                        },
                        {
                            label: '清华四川能源互联网研究院',
                            href: 'https://www.tsinghua-eiri.org/',
                        },
                    ],
                },
            ],
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
