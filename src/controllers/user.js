const { insert_knex, update_knex, del_knex } = require("../database/user_knex");
const { check_email, response, compare_password } = require("../utils/validations_util");

const register = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        if (await check_email(email)) return res.status(400).json({ mensagem: `Cadastro negado: o email: ${email} já está cadastrado.`});

        const [ user ] = await insert_knex( nome, email, senha );
        
        if(!user) return res.status(500).json({ mensagem: `erro interno: usuário não cadastrado.`});

        return res.status(201).json(user);
 
    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }   
}

const profile = async (req, res) => { 
    const [ user ] = req.user;
    return res.json({
        id: user.id,
        nome: user.nome,
        email: user.email
    });
}

const update = async (req, res) => {
    const { nome, email, senha} = req.body;
    const [ user ] = req.user;

    try {
        if (nome && nome == user.nome) return res.status(403).json({mensagem: `Atualização negada: o nome ${response(nome)} é idêntico ao do usuário logado.`});
        
        if (email && email == user.email) return res.status(403).json({ mensagem: `Atualização negada: o email: ${email} informado é idêntico ao do usuário logado.`});
    
        if (email && email !== user.email) if(await check_email(email)) return res.status(403).json({mensagem: `Atualização negada: o email ${email} já cadastrado.`});
        
        if( senha && await compare_password(senha, user.senha)) return res.status(403).json({mensagem: 'Atualização negada: a senha de atualização é idêntica ao do usuário logado.'});

        await update_knex(user.id, nome, email, senha);

        return res.status(200).json({mensagem: 'Atualização efetivada.'})
    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }
}

const del = async (req, res) => {
    const { senha} = req.body;
    const [ user ] = req.user;
    
    try {
        if ( !await compare_password(senha, user.senha)) return res.status(403).json({mensagem: 'Exclusão negada: a senha fornecida é diferente da do usuário logado.'});
        
        await del_knex(user.id);

        return res.status(200).json({mensagem: 'Exclusão efetivada.'})
    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }
}
module.exports = {
    register,
    profile,
    update,
    del
}