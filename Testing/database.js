var pgp = require('pg-promise')();

const dbConfig = {
   host: 'localhost',
   port: 5432,
   database: 'weathertech',
   user: 'postgres',
   password: '123' 
};

var db = pgp(dbConfig);

module.exports = db;