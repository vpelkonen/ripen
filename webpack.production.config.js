const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const node_modules_dir = path.resolve(__dirname, 'node_modules');

const config = {
    entry: {
        app: path.resolve(__dirname, 'src/main.js'),
        vendors: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'web'),
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