const jwt = require('jsonwebtoken');
const knex = require('../connections/db_knex');

const filter_authentication = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) return res.status(401).json({mensagem: 'Não autorizado.'});
    
        const token = authorization.split(' ')[1];
        
        if (!token) return res.status(401).json({mensagem: 'Não autorizado.'});
    
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        
        const user = await knex('usuarios').where({ id });

        if (!user) return res.status(401).json({mensagem: 'Não autorizado.'});

        req.user = user;  

        next();

    } catch (error) {
        return res.status(500).json({mensagem: `${error.message}`});
    }
}

module.exports = {
    filter_authentication
}