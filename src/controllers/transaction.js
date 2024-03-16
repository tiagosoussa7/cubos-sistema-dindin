const knex = require('../connections/db_knex');
const { insert_knex, update_knex } = require('../database/transaction_knex');

const list = async (req, res) => {
    const [ user ] = req.user;
    
    try {
        const transactions = await knex('transacoes').select().where({ usuario_id: user.id});

        return res.json(transactions) 
    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }
}

const detail = async (req, res) => {
    const [ user ] = req.user;
    const { id } = req.params;

    const transaction = await knex('transacoes').where({ id: user.id, id: id }).select();
    
    return res.json(transaction);
}

const register = async (req, res) => {
    const [ user ] = req.user;
    const { descricao, valor, data, categoria_id, tipo } = req.body;

    try {
        const category = await knex('categorias').select().where({ id: categoria_id}).first();

        if (!category) return res.status(404).json({ mensagem: `Cadastro negado: a categoria (${categoria_id}) não existe.`});
        
        const [ transaction ] = await insert_knex(descricao, valor, data, categoria_id, tipo, user.id);
        
        transaction.categoria_name = category.descricao;

        return res.status(201).json(transaction);
    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }
}

const update = async (req, res) => {
    const [ user ] = req.user;
    const { id } = req.params;
    const { descricao, valor, data, categoria_id, tipo } = req.body;

    try {
        const [ transaction ] = await knex('transacoes').where({ id: user.id, id: id }).select();
        
        if (!transaction) return res.status(404).json({ mensagem: `Atualização negada: a transação (${id}) não existe.`});

        const category = await knex('categorias').select().where({ id: categoria_id}).first();
        
        if (!category) return res.status(404).json({ mensagem: `Atualização negada: a categoria (${categoria_id}) não existe.`});

        await update_knex(descricao, valor, data, categoria_id, tipo, id);
    
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }
}
module.exports = {
    list,
    detail,
    register,
    update
}