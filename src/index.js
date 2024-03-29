require('dotenv').config();
const express = require('express');
const cors = require('cors'); 

const route_login = require('./routes/login_route');
const route_user = require('./routes/user_routes');
const route_category = require('./routes/category_routes');
const route_transaction = require('./routes/transaction_routes');


const app = express();
app.use(cors());
app.use(express.json());

app.use(route_login);
app.use(route_user);
app.use(route_category);
app.use(route_transaction);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}.`);
});