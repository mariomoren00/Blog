'use strict';

// Declare connection to database
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : process.env.APP_HOST,
    user     : process.env.APP_USER,
    password : process.env.APP_PASSWORD,
    database : process.env.APP_DATABASE,
    charset  : process.env.APP_CHARSET,
    port : process.env.APP_PORT_DB
  }
});

var Bookshelf = require('bookshelf')(knex);

Bookshelf.plugin('registry');
Bookshelf.plugin('visibility');

export { Bookshelf };
