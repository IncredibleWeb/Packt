'use strict';

import gulp from 'gulp';
import requireDir from 'require-dir';

global.paths = {
    // HTML source files
    'html': ['./server/**/*.html', './server/**/*.handlebars', './server/**/*.hbs'],
    // server js files
    'serverJs': './server/**/*.js',
    // JS source files
    'js': './src/js/**/*.js',
    // SASS source files
    'sass': './src/scss/**/*.scss',
    // image sources files
    'img': './src/img/**/*',
    // source folder
    'src': './src',
    // source CSS folder
    'css': './src/css',
    // distribution folder
    'dist': './dist',
    // distribution folder
    'serverDist': './server-dist',
    // files to be copied to dest folder
    'srcCopy': ['./src/api/**/*']
};

requireDir('./gulp', { recurse: false });

gulp.task('default', ['build']);
