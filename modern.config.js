/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable node/no-unsupported-features/es-syntax */
import { defineConfig } from '@modern-js/app-tools';
// import type WebpackChain from 'webpack-chain';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  source: {
    globalVars: {
      ME_ASSETS_CANISTER_ID: isProduction
        ? require('./canister_Ids_config.json').me_assets.ic
        : require('./canister_Ids_config.json').me_assets.local,
    },
  },
  tools: {
    devServer: {
      port: 8083,
      proxy: {
        '/api': {
          target: 'http://localhost:8000/',
          changeOrigin: false,
        },
      },
    },
    terser: opts => {
      opts.terserOptions.compress.drop_console = true;
    },
    webpack: (config, { env, chain }) => {
      // config.test = /\.svg$/;
      // config.use = ['@svgr/webpack'];
      // config.plugins.push(
      // new webpack.EnvironmentPlugin({
      //   isProduction,
      //   CANISTER_ID: isProduction
      //     ? require('./canister_ids.json').buymecoffee.ic
      //     : require('./.dfx/local/canister_ids.json').buymecoffee.local,
      // }),
      // );
      chain
        .plugin('environmentPlugin')
        .use(webpack.EnvironmentPlugin, [
          {
            isProduction,
            CANISTER_ID: isProduction
              ? require('./canister_ids.json').buymecoffee.ic
              : require('./.dfx/local/canister_ids.json').buymecoffee.local,
          },
        ])
        .end();
    },
  },
});
