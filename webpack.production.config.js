var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
    entry: {
        app: path.resolve(__dirname, 'app/main.js'),
        vendors: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
  },
  module: {
    loaders: [

    // Babel
    {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: [node_modules_dir],
      query: {
        presets: ['es2015', 'react']
      }
    },

    // SASS
    {
        test: /\.scss$/,
        loader: 'style!css!sass'
    }
    ]
},
    plugins: [
        new HtmlWebpackPlugin({ title:'Ripen', hash:true, templateContent:'<div id="app"></div>', inject:true }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

module.exports = config;