import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { first, map, catchError, concatMap, tap, share } from 'rxjs/operators';
import { safeLoadAll } from 'js-yaml';
import { VersionSpec, VersionInfo, File } from './interfaces';
import { RootManifest, Document } from '@/interfaces/manifest';
import { docUrls } from 'src/environments/environment';

/**
 * 提供文档内容
 */
@Injectable({
    providedIn: 'root',
})
export class SourceService {
    constructor(private readonly http: HttpClient) {}

    /** 当前版本 */
    readonly current = new BehaviorSubject<VersionInfo>({
        name: 'loading',
        ref: '',
        status: 'development',
        manifest: {
            sitemap: {
                'zh-Hans': {
                    nav: [],
                },
            },
            documents: [],
        },
    });

    /** 获取版本信息 */
    versions(): Observable<VersionSpec[]> {
        return of<VersionSpec[]>([
            {
                name: '0.1',
                ref: 'v0.1',
                status: 'release',
            },
            {
                name: 'master',
                ref: 'master',
                status: 'development',
            },
        ]);
    }

    /**
     * 更改使用的版本
     */
    use(version: VersionSpec | VersionInfo): Observable<VersionInfo> {
        if ('manifest' in version) {
            this.current.next(version);
            return of(version);
        }
        const ret = this.version(version).pipe(
            tap((info) => this.current.next(info)),
            share(),
        );
        ret.subscribe();
        return ret;
    }

    /**
     * 获取文件地址
     */
    private fileUrl(ref: string, path: string): URL[] {
        return docUrls(ref).map((base) => new URL(`.${this.normalizePath(path)}`, base));
    }

    /**
     * 规格化路径
     */
    normalizePath(path: string, base?: string): string {
        if (!base) {
            if (!path.startsWith('/')) return `/${path}`;
            return path;
        }
        return new URL(path, `app-path:${this.normalizePath(base)}`).pathname;
    }

    /** 查找文档 */
    findDocument(path: string, base?: string): Document | undefined {
        path = this.normalizePath(path, base);
        path = path.replace(/(\.md|\.html?|\/)$/, '');
        return this.current.value.manifest.documents.find(
            (d) => d.path === path || d.path === path + '.md' || d.path === path + '/index.md',
        );
    }

    /** 获取版本详情 */
    version(spec: VersionSpec): Observable<VersionInfo> {
        return this.file<RootManifest>('manifest.json', 'json', spec).pipe(map((f) => ({ ...spec, manifest: f.data })));
    }

    file<T>(path: string, responseType: 'json', spec?: VersionSpec): Observable<File<T>>;
    file<T>(path: string, responseType: 'yaml', spec?: VersionSpec): Observable<File<T>>;
    file(path: string, responseType: 'text', spec?: VersionSpec): Observable<File<string>>;
    file(path: string, responseType: 'arraybuffer', spec?: VersionSpec): Observable<File<ArrayBuffer>>;
    /**
     * 获取文件内容
     */
    file(
        path: string,
        responseType: 'json' | 'yaml' | 'text' | 'arraybuffer',
        spec: VersionSpec = this.current.value,
    ): Observable<File<unknown>> {
        path = this.normalizePath(path);
        const urls = this.fileUrl(spec.ref, path);
        return from(urls).pipe(
            concatMap((url) => {
                return this.http
                    .get(url.href, {
                        responseType: (responseType === 'yaml' ? 'text' : responseType) as 'text',
                    })
                    .pipe(
                        catchError((err) => {
                            console.warn(err);
                            return of(undefined);
                        }),
                        map<unknown, File<unknown> | undefined>((res) => {
                            if (res === undefined) return undefined;
                            if (responseType === 'yaml') {
                                const docs = safeLoadAll(res as string, undefined, {
                                    filename: path,
                                    json: true,
                                });
                                if (docs.length === 1) res = docs[0];
                                else res = docs;
                            }
                            return {
                                version: spec,
                                path,
                                url,
                                data: res,
                            };
                        }),
                    );
            }),
            first((v): v is File<unknown> => v != null),
        );
    }
}
