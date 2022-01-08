const express = require('express');

const superhero = require('../utils/superhero');

const route = express.Router();

route.get('/superheros', (req, res) => {
    const name = req.query.name;
    if(!name) return res.render('superheros', { error: 'Not query match.' });

    superhero(name.trim(), (error, superhero) => {
        if(error) return res.render('superheros', { error: 'Invalid name.' });
        res.render('superheros', { superhero, name, result: true });
    });

});

module.exports = route;