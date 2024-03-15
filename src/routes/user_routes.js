const express = require('express');
const { register_user } = require('../controllers/user');
const { body_validation } = require('../middleware/validation');
const { schema_register } = require('../schemas/users_schema');

const route_user = express();

route_user.post('/usuario', body_validation( schema_register ),
    register_user
);

module.exports = route_user;