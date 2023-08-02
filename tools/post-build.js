import fs from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import convertWebp from './convert-webp.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// GitHub Pages 需要 404.html 以支持 SPA
await fs.copyFile(path.resolve(__dirname, '../dist/index.html'), path.resolve(__dirname, '../dist/404.html'));

await convertWebp(path.resolve(__dirname, '../dist/content/'));

// TODO:
// 检查 md 引用的资源，报告不存在的资源，删除未引用的资源
