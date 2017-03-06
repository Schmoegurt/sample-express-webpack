var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './vue-src/app.js',
	output: {
		path: path.resolve(__dirname, './public'),
		publicPath: '/public/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	devtool: '#eval-source-map'
}
