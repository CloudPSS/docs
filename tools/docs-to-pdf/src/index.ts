import fs from 'node:fs/promises';
import { printPages, type Range } from './print-pages.ts';
import { PdfGenerator } from './generate-pdf.ts';

const RANGES: Range[] = [['/documents/software/emtlab/', '/documents/software/emtlab/introduction-to-emtlab/']];

//'/documents/software/emtlab/topology-analysis/';
//const TO = '/documents/software/xstudio/simstudio/cloud-space/';

const documents = await printPages(RANGES, 'dist');
await fs.writeFile('dist/index.txt', documents.map((d) => d.url).join('\n'));
await new PdfGenerator(documents, 'dist/index.pdf').generate();
