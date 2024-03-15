const { encrypt_password } = require('../utils/validations_util');
const knex = require('../connections/db_knex');

async function insert( nome, email, senha ) {
    const user_insert = await knex('usuarios').insert({
        nome,
        email,
        senha: await encrypt_password(senha)
    }).returning(['nome','email']); 

    return user_insert;
}

async function update(id, nome, email, senha) {
    await knex('usuarios').where({ id: id}).update({
        nome: nome,
        email: email,
        senha: await encrypt_password(senha)
    })
}

module.exports = {
    insert,
    update
}