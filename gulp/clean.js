import help from 'gulp-help';
import gutil from 'gulp-util';
import del from 'del';
import config from './config';

let gulp = help(require('gulp'));

gulp.task('clean', 'Cleanup build directories for client-side and server-side scripts',
  ['clean-client']);

gulp.task('clean-client', 'Cleanup build directories for client-side', (cb) => {
  const {client} = config.dist;

  del([`${client}/**`]).then((paths) => {
    gutil.log('[clean]', paths);
    cb();
  });
});
