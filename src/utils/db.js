const { Sequelize } = require('sequelize');

require('dotenv/config');

const client = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  logging: false,
});

module.exports = { client };
