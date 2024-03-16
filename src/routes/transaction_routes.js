const express = require('express');

const { list, detail, register } = require('../controllers/transaction');
const { body_validation } = require('../middleware/validation');
const { schema_register } = require('../schemas/transactions_schema');

const route_transaction = express();

route_transaction.get('/transacao', list);

route_transaction.get('/transacao/:id', detail);

route_transaction.post('/transacao',
    body_validation(schema_register),
    register
);

module.exports = route_transaction;