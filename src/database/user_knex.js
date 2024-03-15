const { encrypt_password } = require('../utils/validations_util');
const knex = require('../connections/db_knex');

async function insert_user( nome, email, senha ) {
    const user_insert = await knex('usuarios').insert({
        nome,
        email,
        senha: await encrypt_password(senha)
    }).returning(['nome','email']);

    return user_insert;
}

module.exports = {
    insert_user
}