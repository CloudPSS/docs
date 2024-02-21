import type { ThemeConfig } from '@docusaurus/preset-classic';
import i18n from './i18n';

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
    { to: '/blog', label: '博客', position: 'left' },
    i18n.locales.length > 1
        ? {
              type: 'localeDropdown',
              position: 'right',
          }
        : {},
];

export default navbars;
