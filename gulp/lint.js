import help from 'gulp-help';
import jshint from 'gulp-jshint';
import config from './config';

let gulp = help(require('gulp'));

gulp.task('lint', 'Lint scripts and try to fix any code style errors', () => {
  return gulp
    .src(config.vetJs)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', { verbose: true }))
    .pipe(jshint.reporter('fail'))
    .pipe(gulp.dest((file) => {
      return file.base;
    }));
});
