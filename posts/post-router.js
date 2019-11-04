const express = require('express');

// database access using knex
const knex = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    //list of post
    //select * from Posts
    //return a promise
    knex
     .select('*')
     .from('posts')
     .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json({error: 'Failed to get post from DB'})
    })
});

router.get('/:id', (req, res) => {
    knex
    .select('*')
    .from('posts')
    .where('id', '=', req.params.id)
    .first()
    .then(post => {
        res.status(200).json(post)
    })
    .catch(error => {
        res.status(500).json({error: 'Failed to get post from DB'})
    })
});

router.post('/', (req, res) => {
    // remember to validate the data sent by the client
    knex
    .insert(req.body, 'id') // ignore the console warning on SQLite
    .into('posts')
    .then(ids => {
        res.status(200).json(ids)
    })
    .catch(error => {
        res.status(500).json({error: 'Failed to get post from DB'})
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
//validate the data before calling the database
    knex('posts')
    .where({id: req.params.id})
    .update(changes)
    .then(count => { // how many rows updated
        res.status(200).json(count)
    })
    .catch(error => {
        res.status(500).json({error: 'Failed to get post from DB'})
    })
});

router.delete('/:id', (req, res) => {
    // const changes = req.body
    knex('posts')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      // count: how many records/rows were delete
      res.status(200).json(count);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete post' });
    });

});

module.exports = router;