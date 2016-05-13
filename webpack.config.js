const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    './client/index.js'
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, './client')
    }]
  },

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/client/index.html',
      inject: 'body'
    })
  ]

};
