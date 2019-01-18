import * as gulp from 'gulp';
import * as cleancss from 'gulp-clean-css';
import * as uglify from 'gulp-uglify';
import * as htmlmin from 'gulp-htmlmin';
import * as workboxBuild from 'workbox-build';
import * as hexo from 'hexo';
import * as puppeteer from "puppeteer";
import * as path from 'path';
import * as fs from 'fs';

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
    const page = await browser.newPage();
    for (const url of (require("./public/search.json") as Array<{ url: string }>).map(d => d.url))
    {
        const p = `./public/pdf${url.replace(/\.html?$/, ".pdf")}`;
        console.log(p);
        const uri = new URL(url, "https://docs.cloudpss.net");
        try { await page.goto(uri.href, { waitUntil: "networkidle0", timeout: 5000 }); } catch{ }
        const dir = path.dirname(p);
        if (!fs.existsSync(dir))
            await fs.promises.mkdir(dir);
        await page.pdf({ path: p, format: "A4", margin: { left: 32, right: 32, top: 40, bottom: 40 } });

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