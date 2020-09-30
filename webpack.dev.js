const { merge } = require("webpack-merge");
const commom = require('./webpack.common');

const config = {
    mode : 'development'
}

module.exports = merge(commom,config);