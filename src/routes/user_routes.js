const express = require('express');
const { register_user, profile } = require('../controllers/user');
const { body_validation } = require('../middleware/validation');
const { schema_register } = require('../schemas/users_schema');
const { filter_authentication } = require('../middleware/authentication');

const route_user = express();

route_user.post('/usuario', body_validation( schema_register ),
    register_user
);

route_user.use(filter_authentication);

route_user.get('/usuario', 
    profile
);

module.exports = route_user;