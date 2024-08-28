/* eslint-disable no-console */
import os from 'node:os';
import fs from 'node:fs/promises';
import { execa } from 'execa';
import download from 'download';
import path from 'node:path/posix';
import { imageSize } from 'image-size';
import chalk from 'chalk-template';
import pb from 'pretty-bytes';
import { getFiles, runParallel } from './helpers.js';

const LIB_WEBP_VERSION = '1.4.0';
// 0:small..100:big
const QUALITY = '80';
// A4, 300dpi
const MAX_WIDTH = 2400;
// 16383 is the maximum height for webp
const MAX_HEIGHT = 16383;

/**
 * 获取 libwebp 下载地址
 * @returns {string}
 */
function getLibWebpUrl() {
    const BASE_URL = 'https://storage.googleapis.com/downloads.webmproject.org/releases/webp/';
    if (os.platform() === 'win32') {
        if (os.arch() !== 'x64') {
            throw new Error('Only x64 architecture is supported on Windows');
        }
        return `${BASE_URL}libwebp-${LIB_WEBP_VERSION}-windows-x64.zip`;
    }
    if (os.platform() === 'darwin') {
        if (os.arch() === 'x64') {
            return `${BASE_URL}libwebp-${LIB_WEBP_VERSION}-mac-x86-64.tar.gz`;
        }
        if (os.arch() === 'arm64') {
            return `${BASE_URL}libwebp-${LIB_WEBP_VERSION}-mac-arm64.tar.gz`;
        }
        throw new Error('Only x64 and arm64 architectures are supported on macOS');
    }
    if (os.platform() === 'linux') {
        if (os.arch() === 'x64') {
            return `${BASE_URL}libwebp-${LIB_WEBP_VERSION}-linux-x86-64.tar.gz`;
        }
        if (os.arch() === 'arm64') {
            return `${BASE_URL}libwebp-${LIB_WEBP_VERSION}-linux-aarch64.tar.gz`;
        }
        throw new Error('Only x64 and arm64 architectures are supported on Linux');
    }
    throw new Error('Unsupported platform');
}

/**
 * 获取 libwebp
 * @returns {Promise<string>} libwebp bin path
 */
async function prepareLibWebp() {
    const url = getLibWebpUrl();
    const folder = path.basename(url).replace(/\.zip|\.tar\.gz$/, '');
    const bin = path.resolve('vendor', folder, 'bin');
    console.log(bin);
    if ((await execa(`${bin}/webpinfo`, ['-version'], { reject: false })).exitCode === 0) {
        console.log('libwebp is already installed');
        return bin;
    }
    console.log('Downloading libwebp...');
    await download(url, 'vendor', { extract: true });
    return bin;
}

/**
 * 压缩图片
 * @param {string | string[]} root 查找需要压缩的图片的路径
 * @returns {Promise<void>}
 */
export default async function convert(root) {
    // 检查 libwebp，打印版本
    const bin = await prepareLibWebp();
    await execa(`${bin}/webpinfo`, ['-version'], { stdio: 'inherit' });

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
        try {
            const size = imageSize(file);
            const type = size.type ?? path.extname(file).slice(1);
            if (type === 'webp') {
                console.log(chalk`{yellow [SKIP]} {underline ${file}} \t Already webp`);
                return;
            }
            if (type === 'gif') {
                await execa(`${bin}/gif2webp`, ['-q', QUALITY, '-m', '6', file, '-o', file]);
            } else {
                let resize;
                if (size.width && size.height) {
                    if (size.width > MAX_WIDTH) {
                        resize = { width: MAX_WIDTH, height: Math.round((size.height / size.width) * MAX_WIDTH) };
                    } else if (size.height > MAX_HEIGHT) {
                        resize = { width: Math.round((size.width / size.height) * MAX_HEIGHT), height: MAX_HEIGHT };
                    }
                } else {
                    console.error(chalk`{red [ERRO]} {underline ${file}} \t Cannot get image size`);
                }
                await execa(`${bin}/cwebp`, [
                    '-q',
                    QUALITY,
                    '-m',
                    '6',
                    ...(resize ? ['-resize', String(resize.width), String(resize.height)] : []),
                    file,
                    '-o',
                    file,
                ]);
                if (resize) {
                    console.log(
                        chalk`{yellow [RSZE]} {underline ${file}} \t ${size.width}x${size.height} -> ${resize.width}x${resize.height}`,
                    );
                }
            }
        } catch (ex) {
            console.error(chalk`{red [FAIL]} {underline ${file}} ${/** @type {Error} */ (ex).message}`);
            errors.push(/** @type {Error} */ (ex));
            return;
        }
        const c = await fs.stat(file);
        original += o.size;
        converted += c.size;
        count++;
        const ratio = ((c.size / o.size) * 100).toFixed();
        console.log(chalk`{green [CONV]} {underline ${file}} \t ${pb(o.size)} -> ${pb(c.size)} \t (${ratio}%)`);
    };

    const files = await getFiles(root, ['png', 'jpg', 'jpeg', 'gif']);
    await runParallel(files, compress);

    const ratio = ((converted / original) * 100).toFixed();
    console.log(`Converted ${count} images, ${pb(original)} -> ${pb(converted)} (${ratio}%)`);

    if (errors.length) {
        throw new AggregateError(errors, `Failed to convert ${errors.length} images`);
    }
}
