const express = require('express');
const { register, profile, update, del } = require('../controllers/user');
const { body_validation } = require('../middleware/validation');
const { schema_register, schema_update, schema_del } = require('../schemas/users_schema');
const { filter_authentication } = require('../middleware/authentication');

const route_user = express();

route_user.post('/usuario', body_validation( schema_register ),
    register
);

route_user.use(filter_authentication);

route_user.get('/usuario', 
    profile
);

route_user.put('/usuario', body_validation( schema_update ),
    update
);

route_user.delete('/usuario', body_validation( schema_del ),
    del
);

module.exports = route_user;