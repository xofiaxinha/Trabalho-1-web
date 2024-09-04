const express = require('express');
const router = express.Router();
router.use(express.json())
//router.use(express.urlencoded({extended: true}));
const { Pokemon } = require('../models');

router.get('/pokemon', async (req, res) => {
    const pokemons = await Pokemon.findAll();
    res.json(pokemons);
});
router.get('/pokemon/:num', async (req, res) => {
    const { num } = req.params;
    try{
        const pokemon = await Pokemon.findAll({where: {number: num}});
        res.json(pokemon);
    }
    catch(err){
        res.status(404).send('Pokemon not found');
    }
});
router.post('/pokemon', async (req, res) => {
    try {
      console.log(req.body);
      const {nome, tipo, level, numero, urlfoto} = req.body
      console.log(nome, tipo, level, numero, urlfoto);
      const newPokemon = await Pokemon.create({name: nome, type: tipo, level: level, number: numero, imageURL: urlfoto});
      console.log(newPokemon);
      res.status(201).json(newPokemon);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  //res.status(200)
});
router.put('/pokemon/:num', async (req, res) => {
    const num = req.params.num;
    let updatedPokemon = await Pokemon.findAll({where: {number: num}});
    const nome = req.body.nome || updatedPokemon.name;
    const tipo = req.body.tipo || updatedPokemon.type;
    const level = req.body.level || updatedPokemon.level;
    const numero = req.body.numero || updatedPokemon.number;
    const urlfoto = req.body.urlfoto || updatedPokemon.imageURL;
    try {
        const [updated] = await Pokemon.update({name: nome, type: tipo, level: level, number: numero, imageURL: urlfoto}, { where: { number: num } });
        console.log(updated);
        if (updated) {
          updatedPokemon = await Pokemon.findAll({where: {number: num}});
          res.status(200).json(updatedPokemon);
        } else {
          res.status(404).send('Pokémon não encontrado');
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.delete('/pokemon/:num', async (req, res) => {
    try {
        const deleted = await Pokemon.destroy({
          where: { number: req.params.num }
        });
        if (deleted) {
          res.status(204).send('Pokémon deletado');
        } else {
          res.status(404).send('Pokémon não encontrado');
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = router;