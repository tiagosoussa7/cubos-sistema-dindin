const knex = require('../connections/db_knex');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function check_email( email ) {
    const email_check = await knex('usuarios').where({email: email}).first();
    return email_check;
}

async function encrypt_password( senha ) {
    const password_encrypt = await bcrypt.hash( senha, 10 );
    return password_encrypt;
}

async function compare_password(senha1, senha2) {
    const password_compare = await bcrypt.compare(senha1, senha2);
    return password_compare;
}

async function create_token( email, senha, chave, res) { 

    if (!await compare_password(senha, email.senha)) return res.status(403).json({mensagem: `Login negado: senha e/ou email esta incorreto(s).`})

    const token = jwt.sign({senha: email.senha}, chave, {expiresIn: '10h'});

    return res.status(200).json({token: token});
}

module.exports = {
    check_email,
    encrypt_password,
    compare_password,
    create_token
}