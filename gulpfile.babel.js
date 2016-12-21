import gulp from 'gulp';
import './gulp/build';
import './gulp/serve';
import './gulp/lint';
import './gulp/test';

gulp.task('default', ['lint', 'test', 'serve']);
