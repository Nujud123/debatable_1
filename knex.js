const environment = 'development';
const convig = require('./knexfile')[environment];

module.exports = require('knex')(convig);