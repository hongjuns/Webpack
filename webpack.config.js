const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry :'./src/webindex.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename:'bundle.[hash].js'
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
        template :'./template.html'
      }),new CleanWebpackPlugin({

      })
    ],
    mode:'none'
}