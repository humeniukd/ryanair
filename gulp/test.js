import gulp from 'gulp';
import path from 'path';
import config from './config';

/**
 * Start the tests using karma.
 * @param  {boolean} singleRun - True means run once and end (CI), or keep running (dev)
 * @param  {Function} done - Callback to fire when karma is done
 * @return {undefined}
 */
function startTests(singleRun, done) {
  let child;
  const excludeFiles = [];
  const Karma = require('karma').Server;

  new Karma({
    configFile: path.resolve(config.karma.configFile),
    exclude: excludeFiles,
    singleRun: !!singleRun
  }, onComplete).start();

  ////////////////

  function onComplete(result) {
    console.log('Karma completed');
    if (child) {
      console.log('shutting down the child process');
      child.kill();
    }
    if (result === 1) {
      done(`karma: tests failed with code ${result}`);
    } else {
      done();
    }
  }
}

gulp.task('test', (done) => {
  startTests(true /*singleRun*/, done);
});
