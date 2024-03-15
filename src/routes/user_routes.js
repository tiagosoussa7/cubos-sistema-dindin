const express = require('express');
const { register_user, profile, update_user } = require('../controllers/user');
const { body_validation } = require('../middleware/validation');
const { schema_register, schema_update } = require('../schemas/users_schema');
const { filter_authentication } = require('../middleware/authentication');

const route_user = express();

route_user.post('/usuario', body_validation( schema_register ),
    register_user
);

route_user.use(filter_authentication);

route_user.get('/usuario', 
    profile
);

route_user.put('/usuario', body_validation( schema_update ),
    update_user
);

module.exports = route_user;