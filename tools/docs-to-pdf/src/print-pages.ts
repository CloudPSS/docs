import path from 'node:path';
import { HOST } from './config.ts';
import { done, printPage } from './print-page.ts';

/** 表示页面范围，包含开始和结束页 */
export type Range = [string, string?];

/** 格式化页面范围的链接 */
function formatRangeLink(link: string): string {
    if (link.startsWith('/')) link = HOST + link;
    else if (!link.startsWith('http:') && !link.startsWith('https:')) link = HOST + '/' + link;
    const url = new URL(link);
    return url.pathname;
}

/** 打印的文档 */
export interface PrintedDocument {
    /** 标题 */
    title: string;
    /** URL */
    url: string;
    /** PDF 文件路径 */
    file: string;
    /** 上一页 URL */
    prev?: string;
    /** 下一页 URL */
    next?: string;
}

/** 打印页面范围 */
async function printRange(range: Range, dist: string): Promise<PrintedDocument[]> {
    const result = [];
    const from = formatRangeLink(range[0]);
    const to = range[1] ? formatRangeLink(range[1]) : undefined;
    let url: string | undefined = HOST + from;
    while (url) {
        const pathname = url.slice(HOST.length);
        const file = path.join(dist, pathname.slice(1).replace(/\/?$/, '.pdf'));
        process.stdout.write(`Printing ${pathname} ...`);
        const pageInfo = await printPage(url, file);
        result.push({ ...pageInfo, url, file });
        process.stdout.write('\b\b\bDone\n');
        if (to && url === HOST + to) break;
        url = pageInfo.next;
    }
    return result;
}

/** 打印多个页面范围 */
export async function printPages(ranges: readonly Range[], dist: string): Promise<PrintedDocument[]> {
    dist = path.resolve(dist);
    const result = [];
    for (const range of ranges) {
        result.push(...(await printRange(range, dist)));
    }
    await done();
    return result;
}
