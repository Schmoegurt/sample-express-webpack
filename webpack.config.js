var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-hot-middleware/client?http://localhost:5000/__webpack_hmr',
		'./vue-src/app.js'
	],
	output: {
		path: path.resolve(__dirname, './public'),
		publicPath: 'http://localhost:5000/public/',
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
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	devtool: '#eval-source-map'
}
