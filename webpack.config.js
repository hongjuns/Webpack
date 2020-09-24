const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry :'./src/webindex.js',
    output : {
        path : path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [
              {
                loader :'style-loader',
                options : {
                  injectType: 'singletonStyleTag'
                }
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
      new HtmlWebpackPlugin({
        template :'./template.html'
      })
    ],
    mode:'none'
}