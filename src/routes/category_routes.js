const express = require('express');
const { list_category } = require('../controllers/category');

const route_category = express();

route_category.get('/categoria', list_category);

module.exports = route_category;