const knex = require('../connections/db_knex');

const list_category = async (req, res) => {
    try {
        const categories = await knex('categorias').select();
        return res.json(categories) 
    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }
}

module.exports = {
    list_category
}