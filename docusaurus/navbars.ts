import type { ThemeConfig } from '@docusaurus/preset-classic';

/**
 * 配置导航栏条目
 * @see https://docusaurus.io/docs/api/themes/configuration#navbar-items
 */
const navbars: NonNullable<ThemeConfig['navbar']>['items'] = [
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
];

export default navbars;
