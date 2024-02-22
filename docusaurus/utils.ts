import type { Locale } from './i18n';
import i18n from './i18n';

export const CURRENT_LOCALE = i18n.locales.includes(process.env['DOCUSAURUS_CURRENT_LOCALE'] as Locale)
    ? (process.env['DOCUSAURUS_CURRENT_LOCALE'] as Locale)
    : i18n.defaultLocale;

// WORKAROUND: https://github.com/facebook/docusaurus/issues/4542

/** 本地化配置 */
type LocalizedConfig<T> = Record<Locale, T>;
/** 本地化配置 */
export function translateConfig<T>(value: LocalizedConfig<T>): T {
    if (!(CURRENT_LOCALE in value))
        throw new Error(`missing translation for ${JSON.stringify(CURRENT_LOCALE)}, ${JSON.stringify(value)}`);
    return value[CURRENT_LOCALE as Locale];
}