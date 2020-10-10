const { merge } = require("webpack-merge");
const commom = require('./webpack.common');

const config = {
    mode : 'development',
    devServer: {
        open : true,
        overlay : true,
        port : 5000,
        historyApiFallback :{
            rewrites: [
                { from: /^\/subpage$/, to: 'template/subpage.html' },
                { from: /./, to: 'template/404.html' }
              ]
        }
    }
}

module.exports = merge(commom,config);