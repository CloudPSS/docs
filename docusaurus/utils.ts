import type { Locale } from './i18n';
import i18n from './i18n';

export const DEV = process.env['NODE_ENV'] === 'development' || process.env['NODE_ENV'] === 'dev';

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

let baseUrl = process.env['DOCS_BASE_URL'] || '';
if (!baseUrl.endsWith('/')) baseUrl += '/';

/**
 * Read the environment variable `DOCS_BASE_URL` and set the `BASE_URL` accordingly
 *
 * Set the /<baseUrl>/ pathname under which your site is served
 * For GitHub pages deployment, it is often '/<projectName>/'
 */
export const BASE_URL = baseUrl;

let homeUrl = process.env['DOCS_HOME_URL'] || 'https://cloudpss.net';
if (!homeUrl.endsWith('/')) homeUrl += '/';

/**
 * Read the environment variable `DOCS_HOME_URL` and set the `HOME_URL` accordingly
 */
export const HOME_URL = homeUrl;
