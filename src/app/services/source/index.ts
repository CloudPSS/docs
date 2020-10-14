import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { first, map, catchError, concatMap, tap, share } from 'rxjs/operators';
import { safeLoadAll } from 'js-yaml';
import { VersionSpec, VersionInfo, File } from './interfaces';
import { Manifest, FrontMatter, DocumentItem } from '@/interfaces/manifest';
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
            sitemap: {},
            documents: {},
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
    fileUrl(path: string, spec: VersionSpec = this.current.value): URL[] {
        return docUrls(spec.ref).map((base) => new URL(`.${this.normalizePath(path)}`, base));
    }

    /**
     * 构建 manifest
     */
    private buildManifest(manifest: Manifest): Manifest {
        const put = (
            segments: readonly string[],
            obj: DocumentItem,
            item: FrontMatter,
            path: {
                raw: string;
                parsed: {
                    lang: string;
                    file: string;
                };
            },
        ): void => {
            const [current, ...rest] = segments;
            let child = obj.children.find((o) => o.name === current);
            if (!child) {
                child = new DocumentItem(current);
                obj.children.push(child);
            }
            if (rest.length === 0) {
                item.title = item.title ?? child.title;
                Object.assign(child, item);
                child.path = path;
                return;
            } else {
                put(rest, child, item, path);
            }
        };

        const reorder = (item: DocumentItem): void => {
            if (!item.children) return;
            item.children.forEach(reorder);
            item.children.sort((a, b) => {
                const o = (x: DocumentItem): number => {
                    const o = Number(x.order ?? Number.MAX_SAFE_INTEGER);
                    if (Number.isNaN(o)) return Number.MAX_SAFE_INTEGER;
                    return o;
                };
                const ao = o(a);
                const bo = o(b);
                if (ao - bo === 0) return a.title.localeCompare(b.title);
                return ao - bo;
            });
        };

        const root = new DocumentItem('');
        for (const path in manifest.documents) {
            const doc = manifest.documents[path];
            const pathSegments = path.split('/');
            if (!pathSegments[0]) pathSegments.shift();
            const name = pathSegments.pop();
            if (!name) continue;
            if (name !== 'index.md') pathSegments.push(name.slice(0, name.length - '.md'.length));
            put(pathSegments, root, doc, {
                raw: path,
                parsed: {
                    lang: pathSegments[0],
                    file: `/${pathSegments.slice(1).join('/')}`,
                },
            });
        }
        console.log(root);
        reorder(root);
        manifest = {
            ...manifest,
            sitemap: (root.children ?? []).reduce((m, s) => {
                m[s.name] = s;
                return m;
            }, {} as Manifest['sitemap']),
        };
        console.log(manifest);
        return manifest;
    }

    /**
     * 规格化路径
     */
    normalizePath(p: string, base?: string): string {
        if (!base) {
            if (p.startsWith('/')) return p;
            return '/' + p;
        }
        if (base) {
            base = this.normalizePath(base);
        }
        return new URL(p, 'app-path:' + base).href.slice('app-path:'.length);
    }

    /** 查找文档 */
    findDocument(path: string, base?: string): [string, FrontMatter] | undefined {
        path = this.normalizePath(path, base);
        path = path.replace(/(\.md|\.html?|\/)$/, '');
        const k = Object.keys(this.current.value.manifest.documents).find(
            (p) => p === path || p === path + '.md' || p === path + '/index.md',
        );
        if (!k) return undefined;
        return [k, this.current.value.manifest.documents[k]];
    }

    /** 获取版本详情 */
    version(spec: VersionSpec): Observable<VersionInfo> {
        return this.file<Manifest>('manifest.json', 'json', spec).pipe(
            map((f) => ({ ...spec, manifest: this.buildManifest(f.data) })),
        );
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
        const urls = this.fileUrl(path, spec);
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
