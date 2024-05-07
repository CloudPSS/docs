/* eslint-disable no-console */
import { readFile, writeFile } from 'node:fs/promises';
import { globIterate } from 'glob';
import t from 'chalk-template';

/**
 * 格式化行
 * @param {string} line line
 * @returns {string} formatted line
 */
function formatLine(line) {
    // 标点
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])\.($|\s*)/g, '$1。');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF]),\s*/g, '$1，');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF]);\s*/g, '$1；');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])!\s*/g, '$1！');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF]):\s*/g, '$1：');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])\?\s*/g, '$1？');
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])\\\s*/g, '$1、');
    line = line.replace(/[(（]([\u4E00-\u9FA5\u3040-\u30FF。，；：、“”『』〖〗《》\s]+)[)）]/g, '（$1）');
    line = line.replace(/[(（]([a-zA-Z0-9!;,.:?[\]\s]+)[)）]/g, '($1)');
    line = line.replace(/。{3,}/g, '......');
    line = line.replace(/([。，；：、“”『』〖〗《》])\1{1,}/g, '$1');
    // 中文 + 英文
    line = line.replace(/([\u4E00-\u9FA5\u3040-\u30FF])([a-zA-Z0-9[(])/g, '$1 $2');
    // 英文 + 中文
    line = line.replace(/([a-zA-Z0-9\]!;,.:?)])([\u4E00-\u9FA5\u3040-\u30FF])/g, '$1 $2');
    // 链接中文括号替换
    line = line.replace(/\[([^\]]+)\]（([^）]+)）/g, '[$1]($2)');
    // Latex
    line = line.replace(/(?<p>\$+).+?\k<p>/g, (match, /** @type {string} */ p, /** @type {number} */ pos) => {
        if (line[pos - 1] && /[\u4E00-\u9FA5\u3040-\u30FFa-zA-Z0-9\]!;,.:?)]/.test(line[pos - 1])) match = ' ' + match;
        if (line[pos + match.length] && /[\u4E00-\u9FA5\u3040-\u30FFa-zA-Z0-9[(]/.test(line[pos + match.length]))
            match += ' ';
        return match;
    });
    return line;
}
/**
 * 格式化文件
 * @param {string} path path of file
 * @returns {Promise<boolean>} done
 */
async function formatFile(path) {
    const data = await readFile(path, 'utf8');
    const formatted = data
        .replace(/^(.*)(\r?\n\1)+$/gm, '$1')
        .split('\n')
        .map((line) => formatLine(line))
        .join('\n');
    if (data === formatted) return false;
    await writeFile(path, formatted, 'utf8');
    return true;
}

let pattern = process.argv.slice(2);
if (!pattern.length) {
    pattern = ['**/*.md'];
}
pattern = pattern.map((p) => p.replace(/\\/g, '/'));

for await (const file of globIterate(pattern)) {
    process.stdout.write(t`Formatting {underline ${file}} `);
    if (await formatFile(file)) {
        console.log(t`{green Done}`);
    } else {
        console.log(t`{gray Unchanged}`);
    }
}
