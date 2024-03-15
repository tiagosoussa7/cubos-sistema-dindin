const joi = require('joi');

const schema_login = joi.object({
    email: joi.string().email().messages({
        'string.email': 'Login negado: o email não é válido.',
        'string.base': 'Login negado: o email não é válido.'
    }),
    senha: joi.string().required().messages({
        'any.required': 'Login negado: o campo senha é obrigatório.',
        'string.base': 'Login negado: preencha corretamente o campo senha.',
        'string.empty': 'Login negado: o campo senha está vazio.'
    })
});

module.exports = {
    schema_login
}