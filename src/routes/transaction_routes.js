const express = require('express');
const { list_transaction, detail, register_transaction } = require('../controllers/transaction');

const route_transaction = express();

route_transaction.get('/transacao', list_transaction);
route_transaction.get('/transacao/:id', detail);
route_transaction.post('/transacao', register_transaction);

module.exports = route_transaction;