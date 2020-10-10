const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack")

const isProduction = process.env.NODE_ENV === 'PRODUCTION';

module.exports = {
    entry :'./src/webindex.js',
    output : {
        filename:'[name].[chunkhash].js',
        path : path.resolve(__dirname,'dist'),
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
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name () {
                  if (!isProduction) {
                      return '[path][name].[ext]';
                  }
                    return '[contenthash].[ext]';
                  },
                  outputPath : 'assets/',
                },
              },
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
        minify: isProduction ? {
          collapseWhitespace: true,
          useShortDoctype: true
        } :  false ,
        templateParameters: { 
          env: isProduction ? '(운영)' : '(개발용)',
        },
      }),new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        IS_PRODUCTION : isProduction
      })
    ],
}