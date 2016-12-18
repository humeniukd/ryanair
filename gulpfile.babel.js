import gulp from 'gulp';
import './gulp/build';
import './gulp/serve';
import './gulp/lint';
import './gulp/test-unit';

gulp.task('default', 'Default task - run server for development', ['serve']);
gulp.task('test', 'Run all types of tests', ['lint', 'test-unit']);
