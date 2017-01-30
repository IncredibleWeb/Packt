'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';

const b = browserify({
    entries: `${global.paths.src}/js/main.js`,
    debug: true,
    transform: [babelify.configure({
        presets: ['es2015']
    })]
});

// babelify JavaScript files
gulp.task('scripts', () => {
    return b.bundle()
        .pipe(source(`${global.paths.src}/js/main.js`))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(global.paths.src));
});

// babelify and minify JavaScript files (excludes source maps)
gulp.task('scripts_dist', () => {
    return b.bundle()
        .pipe(source(`${global.paths.src}/js/main.js`))
        .pipe(buffer())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(global.paths.dist));
});
