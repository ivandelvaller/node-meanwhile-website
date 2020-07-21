const express = require('express');
const route = express.Router();
const context = require('../utils/context');

route.get('/about', (req, res) => {
    res.render('about', context);
});

module.exports = route;