var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('../webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('public'),
    publicPath: 'http://localhost:8080/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('stylesheets/[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});