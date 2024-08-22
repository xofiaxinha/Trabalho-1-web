const express = require('express');
const router = express.Router();
//const Pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.get('/pokemon', (req, res) => {
    //const pokemons = await Pokemon.findAll();
    //res.json(pokemons);
    res.send('so vendo se funciona');
});
/*router.get('/pokemon/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const pokemon = await Pokemon.findByPk(id);
        res.json(pokemon);
    }
    catch(err){
        res.status(404).send('Pokemon not found');
    }
});*/