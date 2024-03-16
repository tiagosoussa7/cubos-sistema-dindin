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

async function update_knex(descricao, valor, data, categoria_id, tipo, id) {
    await knex('transacoes').where({ id: id}).update({
        descricao,
        valor,
        data,
        categoria_id,
        tipo
    })
}
module.exports = {
    insert_knex,
    update_knex
}