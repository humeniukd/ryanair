import gulp from 'gulp';
import './gulp/build';
import './gulp/serve';
import './gulp/lint';
import './gulp/test-unit';

gulp.task('default', ['serve']);
gulp.task('test', ['lint', 'test-unit']);
