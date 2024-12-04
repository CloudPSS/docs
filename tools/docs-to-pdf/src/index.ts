import fs from 'node:fs/promises';
import { printPages } from './print-pages.ts';
import { PdfGenerator } from './generate-pdf.ts';
import { RANGES } from './config.ts';

const documents = await printPages(RANGES, 'dist');
await fs.writeFile('dist/index.txt', documents.map((d) => d.url).join('\n'));
await new PdfGenerator(documents, 'dist/index.pdf').generate();
