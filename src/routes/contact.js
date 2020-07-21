// Imported node modules.
const express = require('express');

// Imported own modules.
const context = require('../utils/context');

// Instance of Router().
const route = express.Router();

route.get('/contact', (req, res) => {
    res.render('contact', context);
});


module.exports = route;