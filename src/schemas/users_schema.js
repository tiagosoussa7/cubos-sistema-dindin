const joi = require('joi');

const schema_register = joi.object({
    instituicao_nome: joi.string().required().messages({
        'any.required': 'Cadastro negado: o campo  nome é obrigatório.',
        'string.empty': 'Cadastro negado: o campo  nome está vazio.',
        'string.base': 'Cadastro negado: preencha corretamente o campo nome.',
    }),
    instituicao_senha: joi.string().min(4).required().messages({
        'any.required': 'Cadastro negado: o campo senha é obrigatório.',
        'string.base': 'Cadastro negado: preencha corretamente o campo senha.',
        'string.min': 'Cadastro negado: a senha precisa ter no mínimo 4 caracteres.',
        'string.empty': 'Cadastro negado: o campo senha está vazio.',
    })
});

module.exports = {
    schema_register,
}
