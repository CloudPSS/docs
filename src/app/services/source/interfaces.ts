import { RootManifest, LangManifest } from '@/interfaces/manifest';

/**
 * 版本信息
 */
export interface VersionSpec {
    /** 名称 */
    name: string;
    /** 版本的ref */
    ref: string;
    /** 发布日志 */
    note?: string;
    /** 状态 */
    status: 'release' | 'prerelease' | 'development';
}

/** 版本详情 */
export interface VersionInfo extends VersionSpec {
    /**
     * 文档 manifest
     */
    manifest: Omit<RootManifest, 'lang'> & {
        lang: Record<string, LangManifest>;
    };
}

/** 文件内容 */
export interface File<T> {
    /** 文件版本 */
    version: VersionSpec;
    /** 下载文件的 URL */
    url: string;
    /** 文件内容 */
    data: T;
}
