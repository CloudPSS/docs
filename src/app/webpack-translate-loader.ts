import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { __importDefault } from 'tslib';
import locale from '../locale/index.json';

/**
 * 语言定义
 */
type LocaleManifest = Record<
    string,
    {
        name: string;
        alias?: string[];
        default?: boolean;
    }
>;

const langs = locale as LocaleManifest;

/**
 * 翻译加载器
 */
export class WebpackTranslateLoader implements TranslateLoader {
    /** 可用语言 */
    static readonly langs = langs;
    /** 默认语言 */
    static readonly defaultLang = Object.entries(langs).find(([_, v]) => v.default)?.[0] ?? Object.keys(langs)[0];

    /**
     * @inheritdoc
     */
    getTranslation(lang: string): Observable<unknown> {
        return from(import(`../locale/${lang}.json`)).pipe(
            map((mod: { default: unknown }) => __importDefault(mod).default),
        );
    }
}
