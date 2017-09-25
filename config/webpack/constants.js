import HtmlPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import { resolve } from 'path';

export const DEV = 'dev';
export const BUILD = 'build';
export const CONFIG_EVENTS = new Set([ BUILD, DEV ]);

export const ROOT_PATH = resolve('./');
export const SRC_DIR = resolve(ROOT_PATH, 'src');
export const APP_PATH = resolve(SRC_DIR, 'client/index');
export const vendor = [ 'material-ui', 'redux-form', 'react' ];

export const PATHS = {
  src: SRC_DIR,
  dist: resolve(ROOT_PATH, 'dist'),
  config: resolve(ROOT_PATH, 'config'),
  app: resolve(SRC_DIR, 'client/index'),
  template: resolve(SRC_DIR, 'client/templates/index.html'),
  surge: resolve(SRC_DIR, 'client/templates/200.html'),
  imports: resolve(SRC_DIR, 'imports'),
  hotMiddleware: 'webpack-hot-middleware/client',
  RHLPatch: 'react-hot-loader/patch',
};

export const BUILD_CONFIG = {
  entry: { vendor },
  output: { filename: '[name].[chunkhash].bundle.js' },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ names: [ 'vendor', 'manifest' ]}),
    new ExtractTextPlugin('[name].[chunkhash].styles.css'),
    new HtmlPlugin({ filename: 'index.html', template: PATHS.template }),
    new HtmlPlugin({ filename: '200.html', template: PATHS.surge }),
  ],
};

export const DEV_CONFIG = {
  entry: {
    app: [ PATHS.RHLPatch, PATHS.hotMiddleware, PATHS.app ],
    vendor: [ PATHS.RHLPatch, PATHS.hotMiddleware, ...vendor ],
  },
  output: {},
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ names: [ 'vendor', 'manifest' ]}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }}),
  ],
};
