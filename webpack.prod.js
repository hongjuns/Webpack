const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge }  = require('webpack-merge');
const commom = require('./webpack.common');

const config = {
    plugins :[
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ],
    optimization: {
      runtimeChunk: {
        name: 'runtime',
      },
      splitChunks: {
        cacheGroups: {
          commons: {
            // node_modules에 포함된 내용들을 vendor-chunk로 구분짓는다.
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          }
        }
      },
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
        }),
      ],
    },
    mode:'production'
}

module.exports = merge(commom,config);