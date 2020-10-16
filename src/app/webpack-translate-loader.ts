import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { __importDefault } from 'tslib';
import locale from '../locale/index.yml';

/**
 * 语言定义
 */
type LocaleManifest = Record<
    string,
    {
        name: string;
        alias?: string[];
    }
>;

/**
 * 翻译加载器
 */
export class WebpackTranslateLoader implements TranslateLoader {
    /** 可用语言 */
    static readonly langs = locale as LocaleManifest;

    /**
     * @inheritdoc
     */
    getTranslation(lang: string): Observable<unknown> {
        return from(
            import(
                /* webpackMode: 'eager' */
                `../locale/${lang}.yml`
            ),
        ).pipe(map((mod: { default: unknown }) => __importDefault(mod).default));
    }
}
