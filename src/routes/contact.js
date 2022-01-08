const express = require('express');

const context = require('../utils/context');

const route = express.Router();

route.get('/contact', (req, res) => {
    res.render('contact', context);
});

module.exports = route;