import type { Config } from '@docusaurus/types';

/** 进行本地化的语言 */
const locales = [
    'zh-hans',
    // 'zh-hant',
    // 'en',
] as const;

/** 默认语言 */
const defaultLocale: Locale = 'zh-hans';

const config = {
    defaultLocale,
    locales: [...locales],
} satisfies Config['i18n'];

export default config;

/** 进行本地化的语言 */
export type Locale = (typeof locales)[number];
