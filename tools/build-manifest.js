import yaml from 'js-yaml';
import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import markdownIt from 'markdown-it';
import markdownItFrontMatter from 'markdown-it-front-matter';

process.chdir(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../docs'));

try {
    let fm;
    const md = markdownIt({
        html: true,
        typographer: true,
    }).use(markdownItFrontMatter, (f) => (fm = f));

    const base = /** @type {import('../src/app/interfaces/manifest.js').Manifest} */ (
        yaml.load(await fs.readFile('./manifest.yml', 'utf8'))
    );
    const matches = await glob('**/*.md');
    matches.sort();
    base.documents = {};
    const info = await Promise.all(
        matches.map(async (v) => {
            const file = await fs.readFile(v, 'utf8');
            fm = undefined;
            md.render(file);
            const front = fm ? yaml.load(fm) : undefined;
            const frontObj = typeof front == 'object' ? front : undefined;

            const filename = path.basename(v, '.md');
            let title = filename;
            if (filename.toLowerCase() === 'index') {
                title = path.basename(path.dirname(v));
            }

            return [`/${v}`, { title, ...frontObj, content: file }];
        }),
    );
    Object.assign(base.documents, Object.fromEntries(info));
    await fs.writeFile('./manifest.json', JSON.stringify(base), 'utf8');
} catch (ex) {
    // eslint-disable-next-line no-console
    console.error(ex);
}
