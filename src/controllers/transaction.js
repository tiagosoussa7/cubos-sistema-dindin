const knex = require('../connections/db_knex');

const list_transaction = async (req, res) => {
    const [ user ] = req.user;
    
    try {
        const transactions = await knex('transacoes').select().where({ id: user.id});
        return res.json(transactions) 
    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }
}

const detail = async (req, res) => {
    const [ user ] = req.user;
    const { id } = req.params;

    const transaction = await knex('transacoes').where({ id: user.id, id: id }).select();
    console.log(transaction);
    return res.json('ok')
}

const register_transaction = async (req, res) => {

}
module.exports = {
    list_transaction,
    detail,
    register_transaction
}