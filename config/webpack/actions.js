import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import merge from 'webpack-merge';
import webpack from 'webpack';
import WPClean from 'clean-webpack-plugin';
import sharedConf from './shared';

import { BUILD_CONFIG, DEV_CONFIG, PATHS } from './constants';

const clean = path => ({ plugins: [ new WPClean([ path ], { root: process.cwd() }) ]});

export const build = common =>
  merge.smart(common, BUILD_CONFIG, clean(PATHS.dist));

export const dev = (common = sharedConf({ prod: false })) => {
  const dConf = merge.smart(common, DEV_CONFIG);

  return dConf;
};

export const applyHotMiddleware = compiler => (app) => {
  if (process.env.NODE_ENV !== 'production') {
    app.use(
      devMiddleware(compiler, {
        quiet: true,
        noInfo: true,
        stats: { colors: true },
        serverSideRender: true,
        publicPath: compiler.options.output.publicPath,
      })
    );
    app.use(hotMiddleware(compiler));
  }
  return app;
};

export const compile = config => webpack(config);
export const enableHotReload = app => applyHotMiddleware(compile(dev()))(app);
