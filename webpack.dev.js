const { merge } = require("webpack-merge");
const commom = require('./webpack.common');

const config = {
    mode : 'development',
    devServer: {
        open : true,
        overlay : true,
        port : 5000,
        historyApiFallback :true
    }
}

module.exports = merge(commom,config);