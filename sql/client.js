const pg = require('pg');

var conString = process.env.URI_POSTGRESQL;
var client = new pg.Client(conString);

client.connect(function(err) {
      if(err) {
        return console.error('could not connect to postgres', err);
      }
      return client.query('SELECT NOW() AS "theTime"', function(err, result) {
        if(err) {
          return console.error('error running query', err);
        } 
      });
});

module.exports = client;