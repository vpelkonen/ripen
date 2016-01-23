const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'src/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
    	loaders: [
		    // Babel
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
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
	]
};

module.exports = config;