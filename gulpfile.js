const gulp = require("gulp");
const clean = require("gulp-clean");
const connect = require("gulp-connect");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const rev = require("gulp-rev");
const revCollector = require("gulp-rev-collector");
const uglify = require("gulp-uglify");
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const less = require("gulp-less");
const babel = require("gulp-babel"); // babel-preset-env   banel-preset-es2015
const imagemin = require("gulp-imagemin");  // current version 7.x, 8.x is ES Module.

gulp.task('clean', () => {
    return gulp.src(['dist/', 'rev/'], { allowEmpty: true })
        .pipe(clean());
});

gulp.task('less', () => {
    return gulp.src('src/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/tempcss'))
});

gulp.task('minify-css', () => {
    return gulp.src(['src/css/*.css', 'src/tempcss/*.css', '!src/css/*.min.*'])
        .pipe(cleanCSS({ compatibility: 'ie8' })) // 压缩
        // .pipe(rename({ suffix: '.hash' }))
        .pipe(rev()) // 生成hash
        .pipe(gulp.dest('dist/css'))
        .pipe(rev.manifest()) // 生成hash的manifest文件
        .pipe(gulp.dest('rev/css'))
});

gulp.task('minify-js', () => {
    return gulp.src(['src/js/*.js', '!src/js/*.min.*'])
        .pipe(babel()) // babel
        .pipe(uglify())  // 压缩
        // .pipe(javascriptObfuscator({compact: true})) // 混淆
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev.manifest()) // 生成hash的manifest文件
        .pipe(gulp.dest('rev/js'))
});

gulp.task('minify-img', () => {
    return gulp.src('src/images/*.{jpg,jpeg,png,gif,svg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('replace-html', () => {
    return gulp.src(['rev/**/*.json', 'src/*.html']) //mainfest文件和要替换的html
        .pipe(revCollector({ replaceReved: true }))
        .pipe(gulp.dest('dist'))
});

gulp.task('copy-index', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy-js', () => {
    return gulp.src('src/js/*.min.*')
        .pipe(gulp.dest('dist/js'))
});

gulp.task('copy-css', () => {
    return gulp.src('src/css/*.min.*')
        .pipe(gulp.dest('dist/css'))
});

gulp.task('clean-temp', () => {
    return gulp.src(['src/tempcss/'], { allowEmpty: true })
        .pipe(clean())
        .pipe(connect.reload())
});


gulp.task('build', gulp.series('clean', 'less', 'minify-css', 'minify-js', 'minify-img', 'replace-html', 'copy-js', 'copy-css', 'clean-temp'));





gulp.task('watch', () => {
    gulp.watch(['src/*', 'src/*/*', '!src/tempcss/*'], gulp.series('build'))
});




gulp.task('server', async () => {
    connect.server({
        root: 'dist',
        livereload: true // 并不能热加载，需要connect.reload()
    })
});

gulp.task('default', gulp.series(['build', 'server', 'watch']))