/* eslint-disable no-console */
import JSZip from 'jszip';
import { pipeline } from 'node:stream/promises';
import os from 'node:os';
import path from 'node:path';
import { createWriteStream } from 'node:fs';
import fs from 'node:fs/promises';
import chalk from 'chalk-template';
import pb from 'pretty-bytes';
import { getFiles, runParallel } from './helpers.js';

/**
 * 压缩 ZIP 文件
 * @param {string | string[]} root 查找需要压缩的 ZIP 的路径
 * @returns {Promise<void>}
 */
export default async function convert(root) {
    /** 转换中的错误 @type {Error[]} */
    const errors = [];
    let count = 0;
    let original = 0;
    let converted = 0;

    /**
     * 压缩
     * @param {string} file 文件路径
     */
    const compress = async (file) => {
        const o = await fs.stat(file);
        const newFile = path.join(os.tmpdir(), path.basename(file) + '_repacked.zip');
        try {
            const zip = await JSZip.loadAsync(await fs.readFile(file));
            for (const file of zip.filter((path, file) => !file.dir)) {
                zip.file(file.name, await file.async('nodebuffer'), {
                    date: file.date,
                    comment: file.comment,
                    dosPermissions: file.dosPermissions,
                    unixPermissions: file.unixPermissions,
                    createFolders: false,
                    compression: 'DEFLATE',
                    compressionOptions: { level: 9 },
                });
            }
            await pipeline(zip.generateNodeStream(), createWriteStream(newFile));
        } catch (ex) {
            console.error(chalk`{red [FAIL]} {underline ${file}} ${/** @type {Error} */ (ex).message}`);
            errors.push(/** @type {Error} */ (ex));
            return;
        }
        const c = await fs.stat(newFile);
        if (c.size >= o.size) {
            if (c.size > o.size) {
                console.log(
                    chalk`{red [IGNO]} {underline ${file}} \t ${pb(o.size)} -> ${pb(c.size)} \t (+${pb(c.size - o.size)})`,
                );
            } else if (c.size === o.size) {
                console.log(chalk`{yellow [SKIP]} {underline ${file}} \t ${pb(o.size)} -> ${pb(c.size)} \t (+0)`);
            }
            await fs.rm(newFile);
            return;
        }
        original += o.size;
        converted += c.size;
        count++;
        const ratio = ((c.size / o.size) * 100).toFixed();
        console.log(chalk`{green [CONV]} {underline ${file}} \t ${pb(o.size)} -> ${pb(c.size)} \t (${ratio}%)`);
        await fs.copyFile(newFile, file);
        await fs.rm(newFile);
    };

    const files = await getFiles(root, ['zip']);
    await runParallel(files, compress);

    const ratio = ((converted / original) * 100).toFixed();
    console.log(`Optimized ${count} zip files, ${pb(original)} -> ${pb(converted)} (${ratio}%)`);

    if (errors.length) {
        throw new AggregateError(errors, `Failed to optimize ${errors.length} zip files`);
    }
}

if (process.argv[1] === import.meta.filename) {
    await convert(process.argv.slice(2));
}
