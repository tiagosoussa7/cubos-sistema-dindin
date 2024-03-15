const { insert_user } = require("../database/user_knex");
const { check_email } = require("../utils/validations_util");

const register_user = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        if (await check_email(email)) return res.status(400).json({ mensagem: `Cadastro negado: o email: ${email} já está cadastrado.`});

        const [ user ] = await insert_user( nome, email, senha );
        
        if(!user) return res.status(500).json({ mensagem: `erro interno: usuário não cadastrado.`});

        return res.status(201).json(user);
 
    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }   
}

module.exports = {
    register_user
}