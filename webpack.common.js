const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack")

const isProduction = process.env.NODE_ENV === 'PRODUCTION';

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
        minify: isProduction ? {
          collapseWhitespace: true,
          useShortDoctype: true
        } :  false ,
        templateParameters: { 
          env: isProduction ? '(운영)' : '(개발용)',
        },
      }),new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        IS_PRODUCTION : true
      })
    ],
}