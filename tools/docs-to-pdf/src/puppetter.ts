import { type Browser, launch } from 'puppeteer';

let browserInstance: Browser | null = null;
/** 浏览器 */
export async function browser(): Promise<Browser> {
    if (!browserInstance) {
        browserInstance = await launch();
    }
    return browserInstance;
}

/** 退出 */
export async function exit(): Promise<void> {
    if (browserInstance) {
        await browserInstance.close();
        browserInstance = null;
    }
}
