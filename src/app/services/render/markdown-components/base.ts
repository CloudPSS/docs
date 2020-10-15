/**
 * MD 控件的基类
 */
export class MdComponentBase extends HTMLElement {
    /** 标签名称 */
    static tagName: string;
    /**
     * 需要监听的属性名称
     */
    static get observedAttributes(): readonly string[] {
        return [];
    }
    /** 正在初始化 */
    private static _init: Promise<void>;
    /**
     * 初始化控件
     */
    protected static initImpl(): Promise<void> {
        return Promise.resolve();
    }
    /**
     * 初始化控件
     */
    protected static init(): Promise<void> {
        if (this._init == null) {
            this._init = this.initImpl();
        }
        return this._init;
    }
    /**
     * 当 custom element首次被插入文档DOM时，被调用。
     */
    connectedCallback(): void {
        //
    }
    /**
     * 当 custom element从文档DOM中删除时，被调用。
     */
    disconnectedCallback(): void {
        //
    }
    /**
     * 当 custom element被移动到新的文档时，被调用。
     */
    adoptedCallback(): void {
        //
    }
    /**
     * 当 custom element增加、删除、修改自身属性时，被调用。
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        void name;
        void oldValue;
        void newValue;
    }
}
