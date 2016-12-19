import gulp from 'gulp';
import webpack from 'webpack';
import gutil from 'gulp-util';
import colorsSupported from 'supports-color';
import config from './config';
const {webpackConfig} = config;

gulp.task('build', (callback) => {

  webpackConfig.entry.app = config.entry;

  webpack(webpackConfig, (err, stats) => {
    if (err)  {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    callback();
  });
});
