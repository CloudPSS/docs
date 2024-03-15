import type { ThemeConfig } from '@docusaurus/preset-classic';
import { HOME_URL } from './utils';

/**
 * 配置底栏链接
 * 站内链接使用 `to`，站外链接使用 `href`
 * @see https://docusaurus.io/docs/api/themes/configuration#footer-links
 */
const links: NonNullable<ThemeConfig['footer']>['links'] = [
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

const beian = {
    'cloudpss.com.cn': '蜀 ICP 备 2021015330 号 - 1',
    'cloudpss.cn': '蜀 ICP 备 2021015330 号 - 2',
    'cloudpss.net': '蜀 ICP 备 2021015330 号 - 3',
};

const currentBeian = Object.entries(beian).find(([domain]) => HOME_URL.includes(domain))?.[1];

const copyright = [
    `<a href="https://cloudpss.net/" class=footer__link-item target=_blank ><span style="word-spacing: -0.3ch">Copyright © 2015-${new Date().getFullYear()}</span> CloudPSS</a>`,
    currentBeian
        ? `<a href="https://beian.miit.gov.cn/" class=footer__link-item target=_blank style="word-spacing: -0.3ch">${currentBeian}</a>`
        : undefined,
]
    .filter(Boolean)
    .join('<span class=footer__copyright-sep></span>');

export default { links, copyright };
