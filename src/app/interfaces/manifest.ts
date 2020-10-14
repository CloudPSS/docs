/**
 * 表示语言有别的项目罗列
 */
type OfLanguage<T> = Record<string, T>;

/**
 * 表示文档版本的 Manifest
 */
export interface Manifest {
    /**
     * 站点地图，树结构的文档列表
     */
    sitemap: OfLanguage<DocumentItem>;
    /** 文件列表 */
    documents: Record<string, FrontMatter>;
}

/**
 * 表示一个条目
 */
export class DocumentItem implements FrontMatter {
    constructor(
        /**
         * 节点名字
         */
        readonly name: string,
    ) {
        this.title = name;
    }
    /** @inheritdoc */
    title: string;
    /** @inheritdoc */
    order?: number | undefined;
    /**
     * 节点对应文档的路径
     */
    path?: {
        raw: string;
        parsed: {
            lang: string;
            file: string;
        };
    };
    /**
     * 子节点
     */
    readonly children: DocumentItem[] = [];
    /**
     * 节点是否有子级
     */
    hasChild(): boolean {
        if (!this.children) return false;
        return this.children.length > 0;
    }
}

/**
 * 文档的 FrontMatter
 */
export interface FrontMatter {
    /**
     * 文档标题
     */
    title: string;
    /** 节点排序 */
    order?: number | undefined;
    /** 是否显示 toc */
    toc?: boolean;
    /** 是否显示 nav */
    nav?: boolean;
}
