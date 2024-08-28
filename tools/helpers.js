import os from 'node:os';
import path from 'node:path';
import rxjs from 'rxjs';
import { glob } from 'glob';

/**
 * 查找需要处理的文件
 * @param {(string | ReadonlyArray<string>)} root 查找路径或文件名
 * @param {ReadonlyArray<string>} exts 查找的扩展名，不包含 '.'
 * @returns {Promise<string[]>}
 */
export async function getFiles(root, exts) {
    if (!root) throw new TypeError('root is required');
    if (!exts?.length) throw new TypeError('exts is required');

    if (typeof root == 'string') root = [root];

    const extsWithDot = exts.map((e) => '.' + e);
    const globSuffix = exts.length === 1 ? `*.${exts[0]}` : `*.{${exts.join(',')}}`;
    const files = [];
    for (const r of root) {
        if (!r) continue;
        const formatted = r.replaceAll('\\', '/');
        if (extsWithDot.some((e) => formatted.endsWith(e))) {
            files.push(path.relative(process.cwd(), formatted));
        }
        const findRoot = formatted.replace(/\/$/, '');
        const f = await glob(`${findRoot}/**/${globSuffix}`);
        files.push(...f);
    }
    return files;
}

export const PARALLELISM = typeof os.availableParallelism == 'function' ? os.availableParallelism() : 4;

/**
 * 并行运行
 * @template T 数据类型
 * @param {ReadonlyArray<T>} data 数据
 * @param {(data: T) => Promise<void>} action 操作
 * @returns {Promise<void>}
 */
export async function runParallel(data, action) {
    await rxjs.lastValueFrom(rxjs.from(data).pipe(rxjs.mergeMap(async (d) => action(d), PARALLELISM)), {
        defaultValue: undefined,
    });
}
