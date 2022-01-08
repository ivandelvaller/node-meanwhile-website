const express = require('express');

const context = require('../utils/context');

const route = express.Router();

route.get('/', (req, res) => {
    res.render('index', context);
});

module.exports = route;