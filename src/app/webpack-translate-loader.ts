import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { __importDefault } from 'tslib';
import locale from '../locale/index.yml';

/**
 * 翻译加载器
 */
export class WebpackTranslateLoader implements TranslateLoader {
    /** 可用语言 */
    static langs: Record<string, { name: string }> = locale as Record<string, { name: string }>;

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
