
/// <reference path="types.d.ts"/>

import gulp from 'gulp';
import cleancss from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import workboxBuild from 'workbox-build';
import hexo from 'hexo';
import puppeteer from "puppeteer";
import fs from 'fs';
import sanitize from "sanitize-filename";
import del from 'del';

function createHexo(depoly = true) {
    const config = ["_config.yml"]
    if (deploy) {
        config.push("_config_deploy.yml")
    }
    return new hexo(process.cwd(), { config: config.join(",") })
}
export async function hexoGenerate(): Promise<void> {
    const h = createHexo();
    await h.init();
    await h.load();
    await h.call('clean');
    await h.call('generate', { force: true });
    await h.exit();
}

export async function cleanPosts():Promise<void>{
    await del('./public/posts');
}

// 压缩 public/js 目录 js
export function minifyJs() {
    return gulp.src('./public/**/*.js', { sourcemaps: true })
        .pipe(uglify())
        .pipe(gulp.dest('./public', { sourcemaps: './maps' }));
}

// 压缩 public 目录 css
export function minifyCss() {
    return gulp.src('./public/**/*.css', { sourcemaps: true })
        .pipe<NodeJS.ReadWriteStream>(cleancss())
        .pipe(gulp.dest('./public', { sourcemaps: './maps' }));
}

// 压缩 public 目录 html
export function minifyHtml() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            conservativeCollapse: true,
            collapseBooleanAttributes: true,
            removeComments: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'));
}

export function generateSw() {
    const swDest = './public/sw.js'
    return workboxBuild.generateSW({
        swDest: swDest,
        importScripts: [],
        importWorkboxFrom: 'local',
        globPatterns: ['**/*.*'],
        globIgnores: ['maps/**/*'],
        globDirectory: './public',
        maximumFileSizeToCacheInBytes: 1 * 1024 * 1024,
        runtimeCaching:
            [
                {
                    urlPattern: /https:\/\/docs\.cloudpss\.net\//i,
                    handler: 'staleWhileRevalidate',
                    options: { cacheName: 'cloudpss-doc' }
                },
                {
                    urlPattern: /https:\/\/(.+\.|)cloudpss\.net\//i,
                    handler: 'staleWhileRevalidate',
                    options: { cacheName: 'cloudpss' }
                },
                {
                    urlPattern: /https?:\/\/.+/i,
                    handler: 'staleWhileRevalidate',
                    options: { cacheName: 'external resources' }
                }
            ],
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
    });
}

export async function generatePdf() {
    const pathRoot = "./public/pdf/";
    if (!fs.existsSync(pathRoot))
        await fs.promises.mkdir(pathRoot);

    const browser = await puppeteer.launch({
        args: ["--no-sandbox"]
    });
    const webpage = await browser.newPage();

    let pageMap = require("./public/search.json") as SearchRecord[];
    pageMap = pageMap.filter(p => p.url.match(/\.html?$/))
        .sort((a, b) => {
            var ao = a.order || Number.MAX_VALUE;
            var bo = b.order || Number.MAX_VALUE;
            if (ao !== bo)
                return ao - bo;
            return a.title.localeCompare(b.title);
        });

    const siteMap = require("./public/sitemap.json") as SiteMap;

    async function saveCate(typeKey: string, cat: Category, path: string) {
        const catname = Object.getOwnPropertyNames(cat)[0];
        path = path + catname + "/";
        if (!fs.existsSync(path))
            await fs.promises.mkdir(path);

        let content = cat[catname];
        if (!Array.isArray(content))
            content = [content];

        let catOrder = 0;
        for (const child of content) {
            if (typeof child === 'number')
                for (const p of pageMap.filter(p => p.category === child && p.type === typeKey))
                    await savePage(p, path);
            else {
                await saveCate(typeKey, child, path + catOrder);
                catOrder++;
            }
        }
    }

    for (const p of pageMap.filter(p => !p.type))
        await savePage(p, pathRoot);

    let typeOrder = 0;
    for (const typeKey in siteMap) {
        const path = pathRoot + typeOrder + typeKey + "/";
        typeOrder++;

        const type = siteMap[typeKey];

        for (const p of pageMap.filter(p => p.type == typeKey && !p.category))
            await savePage(p, path);

        if (type.categories) {
            let catOrder = 0;
            for (const cat of type.categories) {
                await saveCate(typeKey, cat, path + catOrder);
                catOrder++;
            }
        }
    }

    async function savePage(page: SearchRecord, dir: string) {
        const p = `${dir}${(page.order || 0)}${(sanitize(page.title) || "index")}.pdf`;
        console.log(p);
        const uri = new URL(page.url, "https://docs.cloudpss.net");
        try { await webpage.goto(uri.href, { waitUntil: "networkidle0", timeout: 30000 }); } catch{ }
        await webpage.$$eval("h2#相关元件, h2#相关元件 + *", e => e.forEach(el => el.remove()));
        await webpage.$$eval("h2#使用说明, h2#使用说明 + *", e => { if (e.length === 1) { e.forEach(el => el.remove()) } });
        await webpage.$$eval("mx-graph > svg", (e: SVGElement[]) => e.forEach(el => el.style.maxHeight = '200px'));
        await webpage.$$eval('th[style="text-align:center"]', (e: HTMLTableHeaderCellElement[]) => e.forEach(el => { if (el.innerText === "类型") el.style.minWidth = "104px" }));
        if (!fs.existsSync(dir))
            await fs.promises.mkdir(dir);
        await webpage.pdf({ path: p, format: "A4", margin: { left: '10mm', right: '10mm', top: '10mm', bottom: '10mm' } });
    }

    await browser.close();
}
export async function hexoDeploy(): Promise<void> {
    const h = createHexo();
    await h.init();
    await h.call('deploy', {});
    await h.exit();
}

export const generate = gulp.series(hexoGenerate, cleanPosts, gulp.parallel(minifyCss, minifyJs, minifyHtml), generateSw);

export const deploy = gulp.series(generate, hexoDeploy);

export default deploy;