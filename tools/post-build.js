import { copyFile } from 'fs-extra';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

await import('./build-manifest.js');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
await copyFile(path.resolve(__dirname, '../dist/index.html'), path.resolve(__dirname, '../dist/404.html'));
