const gulp = require('gulp');
const minifycss = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');
const workboxBuild = require('workbox-build');
const hexo = require('hexo');

gulp.task('hexo-generate', function(){
    const h = new hexo(process.cwd(), {});
    return h.init()
        .then(() => h.load())
        .then(() => h.call('clean'))
        .then(() => h.call('generate', {force: true}))
        .finally(() => h.exit());
})

// 压缩 public 目录 css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});

// 压缩 public 目录 html
gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
         removeComments: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});

// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});


gulp.task('generete-sw', function() {
    return workboxBuild.generateSW({ 
        swDest: './public/sw.js',
         importWorkboxFrom: 'local',
         globPatterns: [ '**/*.*' ],
         globDirectory: './public',
         runtimeCaching: 
          [ { urlPattern: /https:\/\/(.+\.|)cloudpss.net\//i,
              handler: 'staleWhileRevalidate',
              options: { cacheName: 'cloudpss' } },
            { urlPattern: /http[s]?:\/\/.+/i,
              handler: 'staleWhileRevalidate',
              options: { cacheName: 'external resources' } } ],
         skipWaiting: true,
         clientsClaim: true 
    });
});

gulp.task('hexo-deploy', function(){
    const h = new hexo(process.cwd(), {});
    return h.init()
        .then(() => h.load())
        .then(() => h.call('deploy', {}))
        .finally(() => h.exit());
})

// 执行 gulp 命令时执行的任务
gulp.task('default', gulp.series('hexo-generate', gulp.parallel('minify-html', 'minify-css', 'minify-js'), 'generete-sw', 'hexo-deploy'));