const express = require('express');
const route_user = require('./routes/user_routes');



const app = express();
app.use(express.json());

app.use(route_user);

app.listen(3000);