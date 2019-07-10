var express = require('express'),
  env = process.env.NODE_ENV || 'development',
  config = require('./config')[env];
var cors = require('cors');
module.exports = function(app) {
  app.use(express.static(config.rootPath + '/public'));
  app.use(express.compress());
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(cors());
};
