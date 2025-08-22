import type { ThemeConfig } from '@docusaurus/preset-classic';
import i18n from './i18n';

/**
 * 配置导航栏条目
 * @see https://docusaurus.io/docs/api/themes/configuration#navbar-items
 */
const navbars: NonNullable<ThemeConfig['navbar']>['items'] = [
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
                sidebarId: 'software',
            },
            {
                label: '硬件产品',
                type: 'docSidebar',
                sidebarId: 'hardware',
            },
            {
                label: '软件工具',
                type: 'docSidebar',
                sidebarId: 'softwaretools',
            },
            {
                label: '运维工具',
                type: 'docSidebar',
                sidebarId: 'maintenancetools',
            },
            // {
            //     label: '测试功能',
            //     type: 'docSidebar',
            //     sidebarId: 'betafeatures',
            // },
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
        label: '案例',
        type: 'docSidebar',
        sidebarId: 'cases',
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
        to: '/about',
    },
    {
        href: 'https://github.com/CloudPSS/docs',
        position: 'right',
        className: 'navbar__github-link',
        title: 'GitHub',
    },
];

if (i18n.locales.length > 1) {
    navbars.push({
        position: 'right',
        type: 'localeDropdown',
    });
}

export default navbars;
