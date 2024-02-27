import type { ThemeConfig } from '@docusaurus/preset-classic';
import i18n from './i18n';

/**
 * 配置导航栏条目
 * @see https://docusaurus.io/docs/api/themes/configuration#navbar-items
 */
const navbars: NonNullable<ThemeConfig['navbar']>['items'] = [
    {
        position: 'left',
        label: '首页',
        type: 'docSidebar',
        sidebarId: 'overview',
    },
    {
        position: 'left',
        label: '文档',
        type: 'dropdown',
        items: [
            {
                label: '快速入门',
                type: 'docSidebar',
                sidebarId: 'guide',
            },
            {
                label: '软件产品',
                type: 'docSidebar',
                sidebarId: 'soft',
            },
            {
                label: '硬件产品',
                type: 'docSidebar',
                sidebarId: 'hard',
            },
            {
                label: '软件工具',
                type: 'docSidebar',
                sidebarId: 'softtools',
            },
            {
                label: '开发工具',
                type: 'docSidebar',
                sidebarId: 'devtools',
            },
            {
                label: '已归档内容',
                type: 'docSidebar',
                sidebarId: 'archivedcontent',
            },
        ],
        sidebarId: 'docs',
    },
    {
        position: 'left',
        label: '教程',
        type: 'docSidebar',
        sidebarId: 'tutorials',
    },
    {
        position: 'left',
        label: '其他',
        type: 'docSidebar',
        sidebarId: 'others',
    },
    {
        position: 'left',
        label: '博客',
        to: '/blog',
    },
    {
        position: 'left',
        label: '关于',
        type: 'docSidebar',
        sidebarId: 'about',
    },
];

if (i18n.locales.length > 1) {
    navbars.push({
        position: 'right',
        type: 'localeDropdown',
    });
}

export default navbars;
