const knex = require('../connections/db_knex');
const bcrypt = require('bcrypt');

async function check_email( email ) {
    const email_check = await knex('usuarios').where({email: email}).first();
    return email_check;
}

async function encrypt_password( senha ) {
    const password_encrypt = await bcrypt.hash( senha, 10 );
    return password_encrypt;
}

module.exports = {
    check_email,
    encrypt_password
}