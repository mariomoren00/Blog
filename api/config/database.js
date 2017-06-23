'use strict';

// Declare connection to database
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'your_password',
    database : 'blog',
    charset  : 'utf8',
    port : 3306
  }
});

const bookshelf = require('bookshelf')(knex);

export { bookshelf };
