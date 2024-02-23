import type { ThemeConfig } from '@docusaurus/preset-classic';
import { themes } from 'prism-react-renderer';

/**
 * 需要支持高亮的语言，列表参考 https://prismjs.com/#supported-languages
 */
const additionalLanguages = ['java', 'yaml', 'python', 'matlab', 'cpp', 'lua'];

export default {
    theme: themes.vsLight,
    darkTheme: themes.vsDark,
    additionalLanguages,
    magicComments: [
        {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
            className: 'theme-code-block-error-line',
            line: 'error-next-line',
            block: { start: 'error-start', end: 'error-end' },
        },
        {
            className: 'theme-code-block-warning-line',
            line: 'warning-next-line',
            block: { start: 'warning-start', end: 'warning-end' },
        },
    ],
} satisfies ThemeConfig['prism'];
