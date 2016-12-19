import gulp from 'gulp';
import jshint from 'gulp-jshint';
import config from './config';

gulp.task('lint', () => {
  return gulp
    .src(config.vetJs)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
    .pipe(jshint.reporter('fail'))
    .pipe(gulp.dest((file) => {
      return file.base;
    }));
});
