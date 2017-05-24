import gulp     from 'gulp';
import webpack  from 'webpack';
import serve    from 'browser-sync';
import config    from './config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';
import historyApiFallback   from 'connect-history-api-fallback';

gulp.task('serve', () => {
  const { webpackConfig } = config;
  const compiler = webpack(webpackConfig);

  serve({
    port: process.env.PORT || 8000,
    open: false,
    server: {baseDir: webpackConfig.output.dir},
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: '/'
      }),
      webpackHotMiddleware(compiler)
    ]
  });
});
