//Imports
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    //Verifica se o token foi enviado pelo header
    if (!authHeader) {
        return res.status(401).send({ error: 'Sem Token validado'})
    }

    //Faz uma verificação de Bearer do token
    const parts = authHeader.split(' ');
    if (!parts.length === 2) {
        return res.status(401).send({error: 'Token Error'})
    }

    const [ scheme, token ] = parts;

    //Regex para verificar se o token está formatado corretamente
    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({ error: 'Token mal formatado'});
    }

    //Verificação de token para ver se o token é desta apicação e não de outra qualquer
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({error: 'Token inválido'});
        }

        req.userId = decoded.id;

        return next();
    });

};