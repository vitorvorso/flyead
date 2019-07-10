var express = require('express');
var fs = require('fs');
var https = require('https');
var sslOptions = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var dotenv = require('dotenv');
dotenv.load();

// Configure server
var app = express();
require('./config/express')(app);
require('./config/routes')(app);

// Start listening
var port = process.env.PORT || 4000;
app.listen(port);
// https.createServer(sslOptions, app).listen(port);
console.log('Application started on port ' + port);

console.log(process.env);

module.exports = app;
