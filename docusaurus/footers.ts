import type { ThemeConfig } from '@docusaurus/preset-classic';

/**
 * 配置底栏链接
 * 站内链接使用 `to`，站外链接使用 `href`
 * @see https://docusaurus.io/docs/api/themes/configuration#footer-links
 */
const footers: NonNullable<ThemeConfig['footer']>['links'] = [
    {
        title: 'Docs',
        items: [
            {
                label: '编写指南',
                to: '/meta/',
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
];

export default footers;
