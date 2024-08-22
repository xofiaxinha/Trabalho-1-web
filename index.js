const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./routes/rotas');
const router = express.Router();
const Pokemon = require('./models/pokemon');
const Sequelize = require('sequelize');
const config = require('./config/config')[process.env.NODE_ENV || 'development'];

app.use(express.json());


async function connectToPostgres(){
    const sequelize = new Sequelize(config.postgres.options);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

config.postgres.client = connectToPostgres();
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});