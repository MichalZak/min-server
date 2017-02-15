var express = require('express');
var router = express.Router();
var path = require('path');

// my custom route
router.get('/test', function(req, res) {
  res.send({ok:true});
});

var config = require('./config');

var opts = {
      couchHost: config.server.url,
      databaseName: config.server.database_name,
      port: config.server.port,
      logFormat: 'dev',
      static: path.join(__dirname, './public'),
      usersDatabaseName: config.server.userDatabaseName,
      production: config.server.production
};
var envoy = require('cloudant-envoy')(opts);
envoy.events.on('listening', function() {
     console.log('[OK]  Server is up');
});