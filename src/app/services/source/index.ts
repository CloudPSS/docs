import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { first, map, catchError, concatMap, mergeMap, toArray } from 'rxjs/operators';
import { safeLoadAll } from 'js-yaml';
import { VersionSpec, VersionInfo, File } from './interfaces';
import { RootManifest, LangManifest } from '@/interfaces/manifest';

/**
 * 提供文档内容
 */
@Injectable({
    providedIn: 'root',
})
export class SourceService {
    constructor(private readonly http: HttpClient) {}

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
     * 获取文件地址
     */
    private fileUrl(ref: string, path: string): string[] {
        return [
            `https://cdn.jsdelivr.net/gh/CloudPSS/docs@${ref}/docs/`,
            `https://gitcdn.xyz/cdn/CloudPSS/docs/${ref}/docs/`,
            `https://rawcdn.githack.com/CloudPSS/docs/${ref}/docs/`,
            `https://cdn.statically.io/gh/CloudPSS/docs/${ref}/docs/`,
        ].map((base) => new URL(path, base).href);
    }

    /** 获取版本详情 */
    version(spec: VersionSpec): Observable<VersionInfo> {
        return this.file<RootManifest>(spec, 'manifest.yaml', 'yaml').pipe(
            mergeMap((f) => {
                return from(f.data.lang).pipe(
                    mergeMap((lang) =>
                        this.file<LangManifest>(spec, `${lang}/manifest.yaml`, 'yaml').pipe(
                            map((f) => ({ lang, data: f.data })),
                        ),
                    ),
                    toArray(),
                    map((res) => [f, res] as const),
                );
            }),
            map(([f, res]) => {
                const result: VersionInfo = {
                    ...spec,
                    manifest: { ...f.data, lang: {} },
                };
                res.forEach((value) => {
                    result.manifest.lang[value.lang] = value.data;
                });
                return result;
            }),
        );
    }

    file<T>(spec: VersionSpec, path: string, responseType: 'yaml'): Observable<File<T>>;
    file(spec: VersionSpec, path: string, responseType: 'text'): Observable<File<string>>;
    file(spec: VersionSpec, path: string, responseType: 'arraybuffer'): Observable<File<ArrayBuffer>>;
    /**
     * 获取文件内容
     */
    file(spec: VersionSpec, path: string, responseType: 'yaml' | 'text' | 'arraybuffer'): Observable<File<unknown>> {
        const urls = this.fileUrl(spec.ref, path);
        return from(urls).pipe(
            concatMap((url) => {
                return this.http
                    .get(url, {
                        responseType: (responseType === 'arraybuffer' ? 'arraybuffer' : 'text') as 'text',
                    })
                    .pipe(
                        catchError((err) => {
                            console.warn(err);
                            return of(undefined);
                        }),
                        map<unknown, File<unknown>>((res) => {
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
