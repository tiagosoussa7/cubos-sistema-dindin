const joi = require('joi');

const schema_register = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'Cadastro negado: o campo  nome é obrigatório.',
        'string.empty': 'Cadastro negado: o campo  nome está vazio.',
        'string.base': 'Cadastro negado: preencha corretamente o campo nome.',
    }),
    email: joi.string().email().required().messages({
        'string.email': 'Cadastro negado: o email não é válido.',
        'string.base': 'Cadastro negado: o email não é válido.',
        'any.required': 'Cadastro negado: o campo email é obrigatório.'
    }),
    senha: joi.string().min(4).required().messages({
        'any.required': 'Cadastro negado: o campo senha é obrigatório.',
        'string.base': 'Cadastro negado: preencha corretamente o campo senha.',
        'string.min': 'Cadastro negado: a senha precisa ter no mínimo 4 caracteres.',
        'string.empty': 'Cadastro negado: o campo senha está vazio.',
    })
});

const schema_update = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'Atualização negado: o campo  nome é obrigatório.',
        'string.empty': 'Atualização negado: o campo  nome está vazio.',
        'string.base': 'Atualização negado: preencha corretamente o campo nome.',
    }),
    email: joi.string().email().required().messages({
        'string.email': 'Atualização negado: o email não é válido.',
        'string.base': 'Atualização negado: o email não é válido.',
        'any.required': 'Atualização negado: o campo email é obrigatório.'
    }),
    senha: joi.string().min(4).required().messages({
        'any.required': 'Atualização negado: o campo senha é obrigatório.',
        'string.base': 'Atualização negado: preencha corretamente o campo senha.',
        'string.min': 'Atualização negado: a senha precisa ter no mínimo 4 caracteres.',
        'string.empty': 'Atualização negado: o campo senha está vazio.',
    })
});

const schema_del = joi.object({
    senha: joi.string().required().messages({
        'any.required': 'Exclusão negada: o campo senha é obrigatório.',
        'string.base': 'Exclusão negada: preencha corretamente o campo senha.',
        'string.empty': 'Exclusão negada: o campo senha está vazio.',
    })
});

module.exports = {
    schema_register,
    schema_update,
    schema_del
}
