/**
 * 表示文档版本的 Manifest
 */
export interface RootManifest {
    /**
     * 文档支持的语言
     */
    sitemap: Record<string, LangManifest>;
    /** 文件列表 */
    documents: Document[];
}

/**
 * 表示一个导航栏条目
 */
export type NavItem = {
    title: string;
    menu?: NavItem[];
    content?: Array<Document['path']>;
};

/**
 * 文档的 FrontMatter
 */
export interface FrontMatter {
    /**
     * 文档标题
     */
    title?: string;
}

/**
 * 表示一个文档
 */
export interface Document extends FrontMatter {
    /**
     * 文档标题
     */
    title: string;
    /**
     * 文档相对路径
     */
    path: string;
}

/**
 * 表示文档特定语言的 Manifest
 */
export interface LangManifest {
    /**
     * 导航栏定义
     */
    nav: NavItem[];
}
