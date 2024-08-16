import type { ThemeConfig } from '@docusaurus/preset-classic';

/**
 * 配置底栏链接
 * 站内链接使用 `to`，站外链接使用 `href`
 * @see https://docusaurus.io/docs/api/themes/configuration#footer-links
 */
const links: NonNullable<ThemeConfig['footer']>['links'] = [
    {
        title: '知识库',
        items: [
            {
                label: '快速入门',
                to: '/documents/quick-start/quick-start/',
            },
            {
                label: '编写指南',
                to: '/meta/edit-help/',
            },
            {
                label: 'CloudPSS 旧文档',
                href: 'https://v5_3_29.kb.cloudpss.net/',
            },
            {
                label: 'CloudPSS 4 文档',
                href: 'https://legacy.kb.cloudpss.net/',
            },
        ],
    },
    {
        title: 'CloudPSS',
        items: [
            {
                label: 'CloudPSS 官方网站',
                href: 'https://cloudpss.net',
            },
            {
                label: 'bilibili - CloudPSS 官方账号',
                href: 'https://space.bilibili.com/1724678625',
            },
        ],
    },
    {
        title: '更多',
        items: [
            {
                label: '清华大学电机工程与应用电子技术系',
                href: 'https://www.eea.tsinghua.edu.cn/',
            },
            {
                label: '清华四川能源互联网研究院',
                href: 'https://www.tsinghua-eiri.org/',
            },
        ],
    },
];

const copyright = [
    `<a href="https://cloudpss.net/" class=footer__link-item target=_blank ><span style="word-spacing: -0.3ch">Copyright © 2015-${new Date().getFullYear()}</span> CloudPSS</a>`,
    `<a href="https://beian.miit.gov.cn/" class="footer__link-item footer__beian-link" target=_blank style="word-spacing: -0.3ch">蜀 ICP 备 2021015330 号 - 3</a>`,
]
    .filter(Boolean)
    .join('<span class=footer__copyright-sep></span>');

export default { links, copyright };
