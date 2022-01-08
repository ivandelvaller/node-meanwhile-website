const express = require('express');

const context = require('../utils/context');

const route = express.Router();

route.get('/about', (req, res) => {
    res.render('about', context);
});

module.exports = route;