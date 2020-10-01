const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry :'./src/webindex.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename:'[name].[chunkhash].js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
               {
                 loader : MiniCssExtractPlugin.loader
               },
              {
                loader : 'css-loader',
                 options : {
                  modules : true
                }
              } 
            ],
          },
        ],
      },
    plugins :[
      new MiniCssExtractPlugin({
        filename:'[hash].css'
      }),
      new HtmlWebpackPlugin({
        template :'./template.html',
        collapseWhitespace:  true,
        useShortDoctype: true
      }),new CleanWebpackPlugin({}),
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
    mode:'none'
}