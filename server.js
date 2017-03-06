'use strict'

var express = require('express');
var server = express();

// Serve static files, including the Vue application
server.use(express.static('public'));

// Start listening for requests
server.listen(5000, function(error) {
	if (error) { throw error; }
	console.log('Listening on ' + 5000);
});
