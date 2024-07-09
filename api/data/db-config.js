const knex = require('knex');
const configurations = require('../../knexfile');

const environment = process.env.NODE_ENV || 'development';
const db = knex(configurations[environment]);

module.exports = db;