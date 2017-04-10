'use strict';

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import htmlMin from 'gulp-htmlmin';
import pngquant from 'imagemin-pngquant';
import replace from 'gulp-replace';
import runSeq from 'run-sequence';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import gutil from 'gulp-util';

gulp.task('build', (done) => {
    return runSeq('clean', ['build_sass', 'build_img', 'build_js'], 'compile', done);
});

gulp.task('build_dev', (done) => {
    return runSeq(['lint_js', 'scripts', 'lint_sass', 'sass'], 'compile', done);
});

// build SASS for distribution
gulp.task('build_sass', ['sass_dist', 'lint_sass']);

// build JS for distribution
gulp.task('build_js', ['scripts_dist', 'lint_js']);

gulp.task('compile', ['build_server', 'build_app', 'build_html']);

// babel app file
gulp.task('build_app', () => {
    return gulp.src('./app.babel.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('./'));
});

// babel server files
gulp.task('build_server', () => {
    return gulp.src(global.paths.serverJs)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(global.paths.serverDist));
});

// build HTML for distribution
gulp.task('build_html', () => {
    return gulp.src(global.paths.html)
        .pipe(htmlMin({
                collapseWhitespace: true
            })
            .on('error', function(error) {
                gutil.log(error.toString());
            }))
        .pipe(gulp.dest(global.paths.serverDist));
});

// build images for distribution
gulp.task('build_img', () => {
    return gulp.src(global.paths.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(`${global.paths.dist}/img`));
});
