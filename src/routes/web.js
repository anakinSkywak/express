// khao báo route
const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send('Hello World! vietnam')
});
route.get('/vietvodich', (req, res) => {
    res.render('sample.ejs')
});

module.exports = route;