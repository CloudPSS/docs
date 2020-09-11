/**
 * 表示文档版本的 Manifest
 */
export interface RootManifest {
    /**
     * 文档支持的语言
     */
    lang: string[];
}

/**
 * 表示一个导航栏条目
 */
export type NavItem =
    | {
          type: 'menu';
          title: string;
          subMenu: NavItem[];
      }
    | {
          type: 'topic';
          title: string;
          content: Document[];
      };

/**
 * 表示一个文档
 */
export interface Document {
    /**
     * 文档名称
     */
    name: string;
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
