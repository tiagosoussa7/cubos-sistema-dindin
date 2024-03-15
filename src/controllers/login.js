const { create_token, check_email } = require("../utils/validations_util");

const login = async ( req, res ) => {
    const { email, senha } = req.body;

    try {
        if ( !await check_email(email) ) return res.status(400).json({ mensagem: `Login negado: senha e/ou email incorreto(s).`});
        
        return create_token(await check_email(email), senha, process.env.SECRET_KEY, res);

    } catch (error) {
        return res.status(500).json({ mensagem: `erro interno: ${error.message}`});
    }
}

module.exports = {
    login
}