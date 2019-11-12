
//Imports
const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth');
const User = require('../models/User');

const router = express.Router();

//Função para gerar um Token de autenticação
function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn : 86400,
    });
}

//Listagem geral
router.get('/lista', (req,res) => {

    User.find({} , (erro, dados)=>{
        if (erro) {
            res.statusCode = 500;
            res.send();
        }
        res.statusCode = 200;
        res.json(dados);
    });
});

//Autenticaçao do usuario
router.post('/auth', async(req, res) =>{
    const { email, password } = req.body;

    const user = await User.findOne({email}).select('+password');

    //Verifica se o email do usuario é o mesmo do indicado
    if(!user){
        return res.status(400).send({error: 'Usuário não encontrado'});
    }

    //Verifica se a senha é a mesma que a senha indicada
    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({error: 'Senha ou Email inválido'});
    }

    //Retira a senha da visualização
    user.password = undefined;

    res.send({ 
        user , 
        token: generateToken({ id: user.id }),
    });
});

module.exports = app => app.use('/users', router);