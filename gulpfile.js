'use strict';
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const gcmq  = require('gulp-group-css-media-queries');
const plumber = require ('gulp-plumber');

let cssFiles = [
    './src/style/fonts.css',
	'./src/style/base.css',
	'./src/style/style.css'
];

gulp.task('css', function(){
	return gulp.src(cssFiles)
        .pipe(plumber())
		.pipe(concat('style.css'))
		.pipe(gcmq())
		.pipe(autoprefixer({
            browsers: ['>0.01%'],
            cascade: false
        }))
		.on('error', console.error.bind(console))
        .pipe(cleanCSS({level: 2}))
		.pipe(gulp.dest('./build/style'))
		.pipe(browserSync.stream());
});

gulp.task('html', function () {
    return gulp.src('src/index.html')
        .pipe(plumber())
        .pipe(gulp.dest('build'))
});

gulp.task('script', function () {
    return gulp.src('src/js/script.js')
        .pipe(plumber())
        .pipe(gulp.dest('build/js'))
});


gulp.task('watch', function(){
	browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });

	gulp.watch('./src/style/**/*.css', gulp.series('css'));
});
