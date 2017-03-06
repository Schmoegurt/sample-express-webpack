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
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this necessary.
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					}
				}
			}
		]
	},
	devtool: '#eval-source-map'
}
