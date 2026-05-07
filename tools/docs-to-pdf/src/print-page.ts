import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { type Browser, type Page, launch } from 'puppeteer-core';
import {
    install,
    uninstall,
    Browser as BrowserType,
    resolveBuildId,
    BrowserTag,
    type InstalledBrowser,
    type InstallOptions,
    type UninstallOptions,
    detectBrowserPlatform,
} from '@puppeteer/browsers';
import { HOST } from './config.ts';

let _browser: Browser | null = null;
let _page: Page;

/** 下载浏览器 */
async function downloadBrowser(): Promise<InstalledBrowser> {
    const plat = detectBrowserPlatform();
    if (!plat) {
        throw new Error(`Unsupported platform: ${process.platform} ${process.arch}`);
    }
    const id = await resolveBuildId(BrowserType.CHROMEHEADLESSSHELL, plat, BrowserTag.STABLE);
    const opt: InstallOptions & { unpack: true } & UninstallOptions = {
        cacheDir: path.join(os.homedir(), '.cache/puppeteer'),
        browser: BrowserType.CHROMEHEADLESSSHELL,
        buildId: id,
        unpack: true,
        downloadProgressCallback: 'default',
        baseUrl: 'https://npmmirror.com/mirrors/chrome-for-testing/',
    };
    try {
        return await install(opt);
    } catch (err) {
        await uninstall(opt);
        return await install(opt);
    }
}

/** 浏览器 */
export async function initPage(): Promise<Page> {
    if (!_browser) {
        // eslint-disable-next-line no-console
        console.log(`Initializing browser`);
        const browser = await downloadBrowser();
        // eslint-disable-next-line no-console
        console.log(`Using browser: ${browser.executablePath}`);
        _browser = await launch({
            headless: 'shell',
            executablePath: browser.executablePath,
        });
        _page = await _browser.newPage();
        await _page.goto(HOST, { waitUntil: 'domcontentloaded', timeout: 0 });
        await _page.evaluate(
            ({ THEME_KEY }) => {
                localStorage.setItem(THEME_KEY, 'light');
                globalThis.dispatchEvent(new StorageEvent('storage', { key: THEME_KEY }));
            },
            { THEME_KEY },
        );
    }
    return _page;
}

/** 退出浏览器 */
export async function done(): Promise<void> {
    if (_browser) {
        await _browser.close();
        _browser = null;
    }
}

const INJECT_CSS = /* css */ `
${await fs.readFile(path.resolve(import.meta.dirname, '../../../src/css/print.css'), 'utf8')}
.theme-doc-footer {
    display: none;
}
.markdown figure > img {
    max-width: 60%;
}
`;
const THEME_KEY = 'theme';
const HEADER_SELECTOR = 'article header';
const PREV_SELECTOR = 'a.pagination-nav__link.pagination-nav__link--prev';
const NEXT_SELECTOR = 'a.pagination-nav__link.pagination-nav__link--next';

/** 打印页面到指定位置 */
export async function printPage(url: string, dist: string): Promise<{ title: string; prev?: string; next?: string }> {
    const page = await initPage();
    await page.goto(url, { waitUntil: 'load', timeout: 0 });
    const result = await page.evaluate(
        ({ INJECT_CSS, HEADER_SELECTOR, PREV_SELECTOR, NEXT_SELECTOR }) => {
            for (const img of document.querySelectorAll('img')) {
                img.loading = 'eager';
            }
            for (const d of document.querySelectorAll('dialog')) {
                d.open = true;
            }
            document.body.insertAdjacentHTML('beforeend', `<style>${INJECT_CSS}</style>`);

            const title = (
                document.querySelector<HTMLElement>(HEADER_SELECTOR)?.textContent ?? document.title.split(' | ')[0]
            )?.trim();
            const prev = document.querySelector<HTMLAnchorElement>(PREV_SELECTOR)?.href;
            const next = document.querySelector<HTMLAnchorElement>(NEXT_SELECTOR)?.href;

            return { title, prev, next };
        },
        { INJECT_CSS, HEADER_SELECTOR, PREV_SELECTOR, NEXT_SELECTOR },
    );
    await page.waitForNetworkIdle({ timeout: 0, idleTime: 500, concurrency: 0 });
    await fs.mkdir(path.dirname(dist), { recursive: true });
    await page.pdf({
        path: dist,
        format: 'A4',
        printBackground: true,
        scale: 0.8,
        outline: true,
        margin: {
            top: '1.90cm',
            left: '1.90cm',
            right: '1.90cm',
            bottom: '1.90cm',
        },
    });
    return result;
}
