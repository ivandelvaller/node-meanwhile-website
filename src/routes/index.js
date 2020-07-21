// Imported node modules.
const express = require('express');

// Imported own modules.
const context = require('../utils/context');

// Instance of Router().
const route = express.Router();

// Index view.
route.get('/', (req, res) => {
    res.render('index', context);
});

module.exports = route;