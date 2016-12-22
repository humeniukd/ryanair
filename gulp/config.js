import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

const root = '..';
const isProduction = process.env.NODE_ENV;
const client = `${root}/client`;
const report = `${root}/report`;

let resolveToApp = (glob = '') => path.join(__dirname, client, 'app', glob);
let resolveToComponents = (glob = '') => path.join(__dirname, client, 'app/components', glob);

const webpackEntry = [
  'babel-polyfill',
  path.join(__dirname, '../client/app/app.js')
];

if (!isProduction) {
  webpackConfig.devtool ='source-map';
  webpackEntry.unshift('webpack-hot-middleware/client?reload=true');
  webpackConfig.plugins = webpackConfig.plugins.concat([

    // Adds webpack HMR support. It act's like livereload,
    // reloading page after webpack rebuilt modules.
    // It also updates stylesheets and inline assets without page reloading.
    new webpack.HotModuleReplacementPlugin()
  ]);
}

webpackConfig.entry = webpackEntry;

webpackConfig.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, '../dist')
};

function getKarmaOptions() {
  let options = {
    configFile: 'karma.conf.js',
    exclude: [],
    preprocessors: {}
  };
  options.preprocessors[`${client}/app/**/!(*.spec)+(.js)`] = ['coverage'];
  return options;
}

export default {
  resolveToComponents: resolveToComponents,
  js: resolveToComponents('**/*!(.spec.js).js'),
  less: resolveToApp('**/*.less'),
  karma: getKarmaOptions(),
  webpackConfig,
  html: [
    resolveToApp('**/*.html'),
    path.join(client, 'index.html')
  ],
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  vetJs: [
    './client/**/*.js',
    './gulp/**/*.js',
    './gulpfile*.js',
    './webpack*.js',
    './karma*.js',
    './spec*.js'
  ]
};
