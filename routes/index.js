const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development.postgres.options);

const Pokemon = require('./pokemon')(sequelize, Sequelize);

sequelize.sync();  // Cria as tabelas no banco

module.exports = { sequelize, Pokemon };