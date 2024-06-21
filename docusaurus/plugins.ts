import path from 'node:path';
import type { PluginConfig } from '@docusaurus/types';

import type * as Search from '@easyops-cn/docusaurus-search-local';
import type * as Pwa from '@docusaurus/plugin-pwa';

const plugins: PluginConfig[] = [];

plugins.push(() => {
    return {
        name: 'docusaurus-plugin-postcss-configure',
        configurePostCss(options) {
            options.plugins.push('postcss-preset-env');
            return options;
        },
    };
});

plugins.push((context) => {
    return {
        name: 'docusaurus-plugin-split-config',
        getPathsToWatch() {
            return [`${path.resolve(context.siteDir)}/docusaurus/**/*.{ts,js}`];
        },
    };
});

plugins.push('docusaurus-plugin-image-zoom');

plugins.push([
    '@easyops-cn/docusaurus-search-local',
    {
        docsRouteBasePath: '/',
        blogRouteBasePath: '/blog',
        language: ['zh', 'en'],
        hashed: 'query',
    } satisfies Search.PluginOptions,
]);

plugins.push([
    '@docusaurus/plugin-pwa',
    {
        pwaHead: [
            {
                tagName: 'link',
                rel: 'icon',
                type: 'image/svg+xml',
                href: 'icons/favicon.svg',
            },
            {
                tagName: 'link',
                rel: 'manifest',
                href: 'manifest.json',
            },
            {
                tagName: 'meta',
                name: 'theme-color',
                content: '#242526',
            },
            {
                tagName: 'meta',
                name: 'application-name',
                content: 'CloudPSS 知识库',
            },
            {
                tagName: 'link',
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: 'icons/apple-touch-icon.png',
            },
            {
                tagName: 'meta',
                name: 'apple-mobile-web-app-title',
                content: 'CloudPSS 知识库',
            },
            {
                tagName: 'meta',
                name: 'apple-mobile-web-app-capable',
                content: 'yes',
            },
            {
                tagName: 'link',
                rel: 'mask-icon',
                color: '#94afcc',
                href: 'icons/safari-pinned-tab.svg',
            },
        ],
    } satisfies Pwa.Options,
]);

export default plugins;
