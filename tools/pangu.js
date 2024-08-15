/* eslint-disable no-console */
import path from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import { globIterate } from 'glob';
import t from 'chalk-template';

const FENCE_BEGIN = `ldopjybxlpjidtvhvjgguwqulpxufqnligzo`;
const FENCE_END = `gemiuphdrawprrubzfizoeippnjtouodcpxh`;
const FENCE_RE = new RegExp(`${FENCE_BEGIN}(\\d+)${FENCE_END}`, 'g');

/**
 * 格式化行
 * @param {string} line line
 * @returns {string} formatted line
 */
function formatLine(line) {
    if (line.includes(FENCE_BEGIN) || line.includes(FENCE_END)) {
        // 这么奇葩的输入还是不处理了
        return line;
    }

    // 代码块
    if (line.startsWith('```')) {
        const begin = /^`{3,}/.exec(line)?.[0] ?? '';
        if (line.lastIndexOf(begin) === 0) return line;
    }
    // Latex 块
    if (line.startsWith('$$')) {
        const begin = /^\${2,}/.exec(line)?.[0] ?? '';
        if (line.lastIndexOf(begin) === 0) return line;
    }

    /** @type {Map<string, string>} */
    const map = new Map();
    // Latex & code
    line = line.replace(/(?<!\\)(?<p>(?<i>[$`])\k<i>*).+?\k<p>/g, (match) => {
        const key = Math.random().toString().slice(2);
        map.set(key, match);
        return `${FENCE_BEGIN}${key}${FENCE_END}`;
    });
    // link href
    line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, /** @type {string} */ text, /** @type {string} */ href) => {
        href = href.trim();
        const [l, ...t] = href.split(/\s+/g);
        const key = Math.random().toString().slice(2);
        if (t.length) {
            map.set(key, l);
            return `[${text}](${FENCE_BEGIN}${key}${FENCE_END} ${t.join(' ')})`;
        } else {
            map.set(key, href);
            return `[${text}](${FENCE_BEGIN}${key}${FENCE_END})`;
        }
    });
    // 标点
    line = line.replace(/\.\.\./g, '…');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])\.($|\s*)/g, '$1。');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF]),\s*/g, '$1，');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF]);\s*/g, '$1；');
    // MD 图片 特殊处理
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])!\[\s*/g, '$1 ![');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])!\s*/g, '$1！');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF]):\s*/g, '$1：');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])\?\s*/g, '$1？');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])\\\s*/g, '$1、');
    line = line.replace(/[(（]([\u4E00-\u9FA5\u3040-\u30FF。，；：、“”『』〖〗《》\s]+)[)）]/g, '（$1）');
    line = line.replace(/。{3,}/g, '......');
    line = line.replace(/([。，；：、“”『』〖〗《》])\1+/g, '$1');
    // 中文 + 英文
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])([a-zA-Z0-9[(])/g, '$1 $2');
    // 英文 + 中文
    line = line.replace(/([a-zA-Z0-9\]!;,.:?)])([\u4E00-\u9FA5\u3040-\u30FF])/g, '$1 $2');

    // replace back
    line = line.replace(FENCE_RE, (match, /** @type {string} */ key, /** @type {number} */ pos) => {
        let value = map.get(key) || match;
        if (line[pos - 1] && /[\u4E00-\u9FA5\u3040-\u30FFa-zA-Z0-9\]!;,.:?)]/.test(line[pos - 1])) value = ' ' + value;
        if (line[pos + match.length] && /[\u4E00-\u9FA5\u3040-\u30FFa-zA-Z0-9[(]/.test(line[pos + match.length]))
            value += ' ';
        return value;
    });
    return line;
}
/**
 * 格式化文件
 * @param {string} data data of file
 * @returns {string}
 */
function formatFile(data) {
    const formatted = data
        .replace(/^(.*)(\r?\n)\2+$/gm, '$1$2')
        .split('\n')
        .map((line) => formatLine(line))
        .join('\n');
    return formatted;
}

let pattern = process.argv.slice(2);
if (!pattern.length) {
    pattern = ['**/*.md'];
}
pattern = pattern.map((p) => p.replace(/\\/g, '/'));

for await (const file of globIterate(pattern)) {
    process.stdout.write(t`Formatting {underline ${path.relative(process.cwd(), file)}} `);
    const data = await readFile(file, 'utf8');
    if (data.includes('DO NOT EDIT')) {
        console.log(t`{yellow Skipped}`);
        continue;
    }
    const formatted = formatFile(data);
    if (data !== formatted) {
        await writeFile(file, formatted, 'utf8');
        console.log(t`{green Done}`);
    } else {
        console.log(t`{gray Unchanged}`);
    }
}
