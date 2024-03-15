const express = require('express');
const { register_user } = require('../controllers/user');

const route_user = express();

route_user.post('/usuario', 
    register_user
);

module.exports = route_user;