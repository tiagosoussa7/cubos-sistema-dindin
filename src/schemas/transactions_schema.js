const joi = require('joi');

const schema_register = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'Cadastro negado: o campo  descrição é obrigatório.',
        'string.empty': 'Cadastro negado: o campo  descrição está vazio.',
        'string.base': 'Cadastro negado: preencha corretamente o campo descrição.',
    }),
    valor: joi.string().pattern(/^\d+(\.\d{1,2})?$/).required().messages({
        'any.required': 'Cadastro negado: o campo  valor é obrigatório.',
        'string.empty': 'Cadastro negado: o campo  valor está vazio.',
        'string.base': 'Cadastro negado: preencha corretamente o campo valor.',
        'string.pattern.base': 'Cadastro negado: preencha o campo valor no formato (0 - 0.0).'
    }),
    data: joi.string().pattern(/^\d{2}\/\d{2}\/\d{4}$/).required().messages({
        'string.pattern.base': 'Cadastro negado: preencha o campo data no formato dia/mês/ano - 00/00/0000.',
        'string.empty': 'Cadastro negado: preencha o campo data no formato dia/mês/ano - 00/00/0000.',
        'string.base': 'Cadastro negado: preencha o campo data no formato dia/mês/ano - 00/00/0000.',
    }),
    categoria_id: joi.string().pattern(/^\d+$/).required().messages({
        'any.required': 'Cadastro negado: o campo  categoria id é obrigatório.',
        'string.empty': 'Cadastro negado: o campo  categoria id está vazio.',
        'string.base': 'Cadastro negado: preencha corretamente o campo categoria id.',
        'string.pattern.base': 'Cadastro negado: preencha o campo categoria id apenas com número inteiro.',
    }),
    tipo: joi.string().valid('entrada','saída').required().messages({
        'any.required': 'Cadastro negado: o campo  tipo é obrigatório.',
        'string.empty': 'Cadastro negado: o campo  tipo está vazio.',
        'string.base': 'Cadastro negado: preencha corretamente o campo tipo.',
        'any.only': 'Cadastro negado: preencha o campo tipo apenas com entrada ou saíde.'
    })
});

const schema_update = joi.object({
    descricao: joi.string().required().messages({
        'any.required': 'Atualização negada: o campo  descrição é obrigatório.',
        'string.empty': 'Atualização negada: o campo  descrição está vazio.',
        'string.base': 'Atualização negada: preencha corretamente o campo descrição.',
    }),
    valor: joi.string().pattern(/^\d+(\.\d{1,2})?$/).required().messages({
        'any.required': 'Atualização negada: o campo  valor é obrigatório.',
        'string.empty': 'Atualização negada: o campo  valor está vazio.',
        'string.base': 'Atualização negada: preencha corretamente o campo valor.',
        'string.pattern.base': 'Atualização negada: preencha o campo valor no formato (0 - 0.0).'
    }),
    data: joi.string().pattern(/^\d{2}\/\d{2}\/\d{4}$/).required().messages({
        'string.pattern.base': 'Atualização negada: preencha o campo data no formato dia/mês/ano - 00/00/0000.',
        'string.empty': 'Atualização negada: preencha o campo data no formato dia/mês/ano - 00/00/0000.',
        'string.base': 'Atualização negada: preencha o campo data no formato dia/mês/ano - 00/00/0000.',
    }),
    categoria_id: joi.string().pattern(/^\d+$/).required().messages({
        'any.required': 'Atualização negada: o campo  categoria id é obrigatório.',
        'string.empty': 'Atualização negada: o campo  categoria id está vazio.',
        'string.base': 'Atualização negada: preencha corretamente o campo categoria id.',
        'string.pattern.base': 'Atualização negada: preencha o campo categoria id apenas com número inteiro.',
    }),
    tipo: joi.string().valid('entrada','saída').required().messages({
        'any.required': 'Atualização negada: o campo  tipo é obrigatório.',
        'string.empty': 'Atualização negada: o campo  tipo está vazio.',
        'string.base': 'Atualização negada: preencha corretamente o campo tipo.',
        'any.only': 'Atualização negada: preencha o campo tipo apenas com entrada ou saíde.'
    })
});

module.exports = {
    schema_register,
    schema_update
}