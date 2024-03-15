require('dotenv').config();
const express = require('express');
const route_user = require('./routes/user_routes');
const route_login = require('./routes/login_route');



const app = express();
app.use(express.json());

app.use(route_login);
app.use(route_user);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});