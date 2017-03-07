'use strict'

var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var server = express();
var compiler = webpack(webpackConfig);

// Use webpackDevMiddleware to use webpack to compile files in-memory
server.use(webpackDevMiddleware(compiler, {
	publicPath: '/',
	noInfo: true
}));

// Serve static files, including the Vue application
server.use(express.static('public'));

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
