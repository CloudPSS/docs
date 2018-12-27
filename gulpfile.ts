import * as gulp from 'gulp';
import * as sourcemaps from 'gulp-sourcemaps';
import * as cleancss from 'gulp-clean-css';
import * as uglify from 'gulp-uglify';
import * as htmlmin from 'gulp-htmlmin';
import * as workboxBuild from 'workbox-build';
import * as hexo from 'hexo';

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
    return gulp.src('./public/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'));
}

// 压缩 public 目录 css
export function minifyCss()
{
    return gulp.src('./public/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleancss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'));
}

// 压缩 public 目录 html
export function minifyHtml()
{
    return gulp.src('./public/**/*.html')
        .pipe(htmlmin({
            ignoreCustomFragments: [/<div class="mermaid">.+?<\/div>/],
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
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