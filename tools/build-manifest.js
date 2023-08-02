import p from 'node:path';
import { fileURLToPath } from 'node:url';
import markdownIt from 'markdown-it';
import markdownItFrontMatter from 'markdown-it-front-matter';
import yaml from 'js-yaml';
import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'node:path/posix';

let fm;
const md = markdownIt({
    html: true,
    typographer: true,
}).use(markdownItFrontMatter, (f) => (fm = yaml.load(f)));

/**
 * Markdown to HTML
 * @param {string} data Markdown
 * @returns {{fm: object, content: string}} Front matter and HTML
 */
function render(data) {
    fm = undefined;
    const content = md.render(data);
    return {
        fm: fm && typeof fm == 'object' ? fm : {},
        content,
    };
}

/** 生成 manifest.json */
export default async function () {
    const cwd = process.cwd();
    process.chdir(p.resolve(p.dirname(fileURLToPath(import.meta.url)), '../docs'));
    try {
        const base = /** @type {import('../src/app/interfaces/manifest.js').Manifest} */ (
            yaml.load(await fs.readFile('./manifest.yml', 'utf8'))
        );
        const matches = await glob('**/*.md', { posix: true });
        matches.sort();
        base.documents = {};
        const info = await Promise.all(
            matches.map(async (v) => {
                const file = await fs.readFile(v, 'utf8');
                const { fm } = render(file);
                const filename = path.basename(v, '.md');
                let title = filename;
                if (filename.toLowerCase() === 'index') {
                    title = path.basename(path.dirname(v));
                }

                return /** @type {const} */ ([`/${v}`, { title, ...fm, content: file }]);
            }),
        );
        const map = Object.fromEntries(info);
        Object.assign(base.documents, map);
        await fs.writeFile('./manifest.json', JSON.stringify(base), 'utf8');
        // eslint-disable-next-line no-console
        console.log('manifest.json generated');
    } catch (ex) {
        // eslint-disable-next-line no-console
        console.error(ex);
    } finally {
        process.chdir(cwd);
    }
}
