const { check_email, compare_password } = require("../utils/validations_util");
const jwt = require('jsonwebtoken');

const login = async ( req, res ) => {
    const { email, senha } = req.body;

    try {
        if ( !await check_email(email) ) return res.status(400).json({ mensagem: `Login negado: senha e/ou email incorreto(s).`});
        
        const user = await check_email(email);
        
        if ( !await compare_password( senha, user.senha) ) return res.status(400).json({ mensagem: `Login negado: senha e/ou email incorreto(s).`});
        
        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '10h'});

        const {senha: _, ...data_user} = user;

        return res.status(200).json({
            usuário: data_user,
            token: token
        });

    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }
}

module.exports = {
    login
}