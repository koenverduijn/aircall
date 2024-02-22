const path = require("path");
const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'production',
   devServer: {
    static: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
  },
 });