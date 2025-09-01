const STYLES = /* css */ `
:host {
    display: grid;
    place-items: stretch;
    z-index: 10;
    position: fixed;
    inset: 0;
    box-sizing: border-box;
    contain: strict;
}

:host(:not([show])) {
    display: none;
}

:host([show=fullscreen]) {
    inset: 0;
    width: 100%;
    height: 100%;
}

:host([show=float]) {
    width: var(--cwe-chat-float-width, 480px);
    height: var(--cwe-chat-float-height, 720px);

    bottom: var(--cwe-chat-float-bottom, 32px);
    right: var(--cwe-chat-float-right, 16px);
    top: var(--cwe-chat-float-top, unset);
    left: var(--cwe-chat-float-left, unset);
}

:host([show=float]:dir(rtl)) {
    right: var(--cwe-chat-stick-right, unset);
    left: var(--cwe-chat-stick-left, 16px);
}

:host([show=stick]) {
    width: var(--cwe-chat-stick-width, 480px);
    height: var(--cwe-chat-stick-height, 100%);
    
    bottom: var(--cwe-chat-stick-bottom, 0);
    right: var(--cwe-chat-stick-right, 0);
    top: var(--cwe-chat-stick-top, 0);
    left: var(--cwe-chat-stick-left, unset);
}

:host([show=stick]:dir(rtl)) {
    right: var(--cwe-chat-stick-right, unset);
    left: var(--cwe-chat-stick-left, 0);
}

#cloudpss-chat-window {
    border: none;
    box-sizing: border-box;
}
`;
const stylesheet = new CSSStyleSheet();
stylesheet.replaceSync(STYLES);

/**
 * 聊天组件
 */
export type ChatShowMode = 'fullscreen' | 'float' | 'stick';

/**
 * 聊天组件
 */
export class Chat extends HTMLElement {
    private readonly iframe!: HTMLIFrameElement;
    private _src = '/chat';

    /**
     * 聊天组件的 src 属性
     */
    static get observedAttributes(): string[] {
        return ['src'];
    }

    constructor() {
        super();
        this.handleMessage = this.handleMessage.bind(this);
        this.attachShadow({ mode: 'open' });
        this.shadowRoot!.adoptedStyleSheets = [stylesheet];
        // 创建 iframe
        this.iframe = document.createElement('iframe');
        this.iframe.id = 'cloudpss-chat-window';
        this.shadowRoot!.append(this.iframe);
    }

    private showMode: ChatShowMode = 'float';

    set show(value: ChatShowMode | undefined) {
        if (value) {
            if (value !== 'fullscreen') {
                this.showMode = value;
            }
            this.setAttribute('show', value);
        } else {
            this.removeAttribute('show');
        }
    }

    /**
     * 聊天组件的 show 属性
     */
    get show(): ChatShowMode | undefined {
        return this.getAttribute('show') as ChatShowMode | undefined;
    }

    set src(value: string) {
        if (this._src !== value) {
            this._src = value;
            this.setAttribute('src', value);
            if (this.iframe) {
                this.iframe.src = value;
            }
        }
    }

    /**
     * 聊天组件的 src 属性
     */
    get src(): string {
        return this.getAttribute('src') || this._src;
    }

    /**
     * 切换聊天组件的显示状态
     */
    toggle(): void {
        if (this.show) {
            this.show = undefined;
        } else {
            this.show = this.showMode;
        }
    }

    /**
     * 处理聊天组件的消息事件
     */
    private handleMessage(event: MessageEvent<{ action: string } & Record<string, string>>) {
        if (event?.source !== this.iframe.contentWindow) return;

        const { data } = event;
        // action: close fullscreen float stick fullscreenExit
        if (data.action === 'close') {
            this.show = undefined;
            return;
        }
        if (data.action === 'fullscreen') {
            this.show = 'fullscreen';
            return;
        }
        if (data.action === 'fullscreenExit') {
            this.show = this.showMode === 'fullscreen' ? 'float' : this.showMode;
            return;
        }
        if (data.action === 'float') {
            this.show = 'float';
            return;
        }
        if (data.action === 'stick') {
            this.show = 'stick';
            return;
        }
        //dispatchEvent
        const ok = this.dispatchEvent(
            new CustomEvent(data.action, {
                detail: data,
                cancelable: true,
                bubbles: true,
                composed: true,
            }),
        );
        if (ok) {
            if (data.action === 'openLink') {
                window.open(data['data'], '_blank', 'noopener');
            }
        }
    }

    /**
     * 组件连接到文档时调用
     */
    connectedCallback(): void {
        // 从attribute读取src值
        const srcAttr = this.getAttribute('src');
        if (srcAttr) {
            this._src = srcAttr;
        }
        this.iframe.src = this._src;
        // eslint-disable-next-line @typescript-eslint/unbound-method
        window.addEventListener('message', this.handleMessage);
    }

    /**
     * 组件从文档中移除时调用
     */
    disconnectedCallback(): void {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        window.removeEventListener('message', this.handleMessage);
    }

    /**
     * 组件属性变化时调用
     */
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
        if (name === 'src' && oldValue !== newValue) {
            this._src = newValue;
            if (this.iframe && this.isConnected) {
                this.iframe.src = newValue;
            }
        }
    }
}

customElements.define('cwe-chat', Chat);
