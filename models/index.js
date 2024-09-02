const { Sequelize } = require('sequelize');
const config = require('../config/config');

const db = new Sequelize(config.development.postgres.options);

const Pokemon = require('./pokemon')(db, Sequelize);

db.sync();

module.exports = {
    db,
    Pokemon,
};