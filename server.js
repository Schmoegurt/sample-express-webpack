'use strict'

var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var server = express();
var compiler = webpack(webpackConfig);

// Serve static files, including the Vue application
server.use(express.static('public'));

// Use webpackDevMiddleware to use webpack to compile files in-memory
// Use webpackHotMiddleware for hot-reloading
if (process.env.NODE_ENV === 'development') {
	var webpackDevMiddleware = require('webpack-dev-middleware');
	var webpackHotMiddleware = require('webpack-hot-middleware');
	server.use(webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
		noInfo: true
	}));
	server.use(webpackHotMiddleware(compiler));
}

server.get("/api", function(req, res) {
	return res.status(200).send({
		data: "Hello from the back-end!"
	});
});

// Start listening for requests
server.listen(5000, function(error) {
	if (error) { throw error; }
	console.log('Listening on ' + 5000);
});
