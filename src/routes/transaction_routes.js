const express = require('express');

const { list, detail, register, update, cancel } = require('../controllers/transaction');
const { body_validation } = require('../middleware/validation');
const { schema_register, schema_update } = require('../schemas/transactions_schema');

const route_transaction = express();

route_transaction.get('/transacao', 
    list
);

route_transaction.get('/transacao/:id', 
    detail
);

route_transaction.post('/transacao',
    body_validation(schema_register),
    register
);

route_transaction.put('/transacao/:id',
    body_validation(schema_update),
    update
);

route_transaction.delete('/transacao/:id',
    cancel
);

module.exports = route_transaction;