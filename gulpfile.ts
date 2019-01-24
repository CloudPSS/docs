import * as gulp from 'gulp';
import * as cleancss from 'gulp-clean-css';
import * as uglify from 'gulp-uglify';
import * as htmlmin from 'gulp-htmlmin';
import * as workboxBuild from 'workbox-build';
import * as hexo from 'hexo';
import * as puppeteer from "puppeteer";
import * as path from 'path';
import * as fs from 'fs';

/// <reference path="types.d.ts"/>

export function hexoGenerate()
{
    const h = new hexo(process.cwd(), {});
    return (h.init() as Promise<void>)
        .then(() => h.load())
        .then(() => h.call('clean'))
        .then(() => h.call('generate', { force: true }))
        .finally(() => h.exit());
}

// 压缩 public/js 目录 js
export function minifyJs()
{
    return gulp.src('./public/**/*.js', { sourcemaps: true })
        .pipe(uglify())
        .pipe(gulp.dest('./public', { sourcemaps: './maps' }));
}

// 压缩 public 目录 css
export function minifyCss()
{
    return gulp.src('./public/**/*.css', { sourcemaps: true })
        .pipe(cleancss())
        .pipe(gulp.dest('./public', { sourcemaps: './maps' }));
}

// 压缩 public 目录 html
export function minifyHtml()
{
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
        .pipe(gulp.dest('./public'))
}

export function generateSw()
{
    return workboxBuild.generateSW({
        swDest: './public/sw.js',
        importWorkboxFrom: 'local',
        globPatterns: ['**/*.*'],
        globDirectory: './public',
        runtimeCaching:
            [{
                urlPattern: /https:\/\/(.+\.|)cloudpss.net\//i,
                handler: 'staleWhileRevalidate',
                options: { cacheName: 'cloudpss' }
            },
            {
                urlPattern: /http[s]?:\/\/.+/i,
                handler: 'staleWhileRevalidate',
                options: { cacheName: 'external resources' }
            }],
        skipWaiting: true,
        clientsClaim: true
    });
}

export async function generatePdf()
{
    if (!fs.existsSync("./public/pdf"))
        await fs.promises.mkdir("./public/pdf");

    const browser = await puppeteer.launch();

    let pageMap = require("./public/search.json") as SearchRecord[];
    pageMap = pageMap.filter(p => p.url.match(/\.html?$/))
        .sort((a, b) => 
        {
            var ao = a.order || Number.MAX_VALUE;
            var bo = b.order || Number.MAX_VALUE;
            if (ao !== bo)
                return ao - bo;
            return a.title.localeCompare(b.title);
        });

    const siteMap = require("./public/sitemap.json") as SiteMap;

    async function saveCate(typeKey: string, cat: Category, path: string)
    {
        const catname = Object.getOwnPropertyNames(cat)[0];
        path = path + catname + "/";

        let content = cat[catname];
        if (!Array.isArray(content))
            content = [content];

        for (const child of content) 
        {
            if (typeof child === 'number')
                await pageMap.filter(p => p.category === child && p.type === typeKey).map(p => savePage(p, path + p.order + (p.title || "index")));
            else
                await saveCate(typeKey, child, path);
        }
    }

    for (const typeKey in siteMap)
    {
        const path = typeKey + "/";
        const type = siteMap[typeKey];
        pageMap.filter(p => p.type == typeKey && !p.category).map(p => savePage(p, path + p.order + (p.title || "index")));
        if (type.categories)
        {
            await type.categories.map(cat => saveCate(typeKey, cat, path));
        }
    }

    async function savePage(page: SearchRecord, fileName: string)
    {
        const p = `./public/pdf/${fileName}.pdf`;
        console.log(p);
        const uri = new URL(page.url, "https://docs.cloudpss.net");
        const webpage = await browser.newPage();
        try { await webpage.goto(uri.href, { waitUntil: "networkidle0", timeout: 5000 }); } catch{ }
        await webpage.$$eval("h2#相关元件, h2#相关元件 + *", e => e.forEach(el => el.remove()));
        const dir = path.dirname(p);
        if (!fs.existsSync(dir))
            await fs.promises.mkdir(dir);
        await webpage.pdf({ path: p, format: "A4", margin: { left: 32, right: 32, top: 40, bottom: 40 } });
        await webpage.close();
    }

    await browser.close();
}
export function hexoDeploy()
{
    const h = new hexo(process.cwd(), {});
    return h.init()
        .then(() => h.load())
        .then(() => h.call('deploy', {}))
        .finally(() => h.exit());
}

export const generate = gulp.series(hexoGenerate, gulp.parallel(minifyCss, minifyJs, minifyHtml), generateSw);

export const deploy = gulp.series(generate, hexoDeploy);

export default deploy;