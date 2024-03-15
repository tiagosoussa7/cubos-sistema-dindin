const express = require('express');
const { body_validation } = require('../middleware/validation');
const { login } = require('../controllers/login');
const { schema_login } = require('../schemas/login_schema');

const route_login = express();

route_login.post('/login', body_validation(schema_login),
    login
);

module.exports = route_login;