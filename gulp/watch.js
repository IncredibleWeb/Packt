'use strict';

import gulp from 'gulp';
import path from 'path';
import util from 'gulp-util';
import runSeq from 'run-sequence';
import livereload from 'gulp-livereload';
import nodemon from 'gulp-nodemon';

function logChanges(event) {
    util.log(
        util.colors.green('File ' + event.type + ': ') +
        util.colors.magenta(path.basename(event.path))
    );
}

// Watch for changes.
gulp.task('watch', ['build_dev'], () => {
    livereload.listen();
    gulp.watch([global.paths.js], ['lint_js', 'scripts']).on('change', logChanges);
    gulp.watch([global.paths.sass], ['lint_sass', 'sass']).on('change', logChanges);
    gulp.watch([global.paths.html, './app.babel.js'], ['compile']).on('change', logChanges);
    gulp.watch([global.paths.serverJs], ['build_server']).on('change', logChanges);
    return nodemon({
        script: './app.js',
        args: ['/src'],
        watch: ['app.js', 'src/css/inline.css', 'server-dist']
    });
});
