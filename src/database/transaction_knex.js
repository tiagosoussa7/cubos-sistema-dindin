const knex = require('../connections/db_knex');


async function insert_knex(descricao, valor, data, categoria_id, tipo, usuario_id) {
    const user_insert = await knex('transacoes').insert({
        descricao,
        valor,
        data,
        categoria_id,
        tipo,
        usuario_id
    }).returning('*'); 

    return user_insert
}

module.exports = {
    insert_knex
}