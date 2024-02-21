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
        type: 'docSidebar',
        sidebarId: 'docs',
    },
    {
        position: 'left',
        label: '博客',
        to: '/blog',
    },
];

if (i18n.locales.length > 1) {
    navbars.push({
        position: 'right',
        type: 'localeDropdown',
    });
}

export default navbars;
