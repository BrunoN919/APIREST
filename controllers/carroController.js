
//Imports
const express = require('express');
const Carro = require('../models/Carro');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();
router.use(authMiddleware);

//Metodo Create
router.post('/register', (req, res) => {

    if(req.userId){
        var carro = new Carro({
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            cor: req.body.cor,
            placa: req.body.placa,
            combustivel: req.body.combustivel,
            cambio: req.body.cambio,
        });
        carro.save().then(() => {
            //salvo com sucesso
            res.statusCode = 201;
            res.send({user: req.userId});
        }).catch((erro) => {
            if (erro) {
                throw erro;
            }
            // Aconteceu alguma falha
            res.statusCode = 417;
            res.send();
        });
    }
});

//Listagem geral
router.get('/lista', (req,res) => {
    if(req.userId){
        Carro.find({},(erro, dados)=>{
            if (erro) {
                res.statusCode = 417;
                res.send();
            }
            res.statusCode = 200;
            res.json(dados);
        });
    }
});

//Listagem por ID
router.get('/:id', (req,res) => {
    if(req.userId){
        Carro.findById(req.params.id).then((carro) => {
            res.statusCode = 200;
            res.json(carro);
        }).catch((erro) =>{
            if (erro) {
                res.status = 417;
                res.send();
                throw erro;
            }
        });
    }
});

//Deletar por ID
router.delete('/:id', (req, res) =>{
    if(req.userId){
        Carro.findByIdAndRemove(req.params.id).then((carro) =>{
            if (carro) {
                res.statusCode = 200;
                res.send();
            }else{
                res.statusCode = 404;
                res.send();
            }
        }).catch((erro) =>{
            if (erro) {
                res.status = 417;
                res.send();
                throw erro;
            }
        });
    }
});


//Atualizar por ID
router.put('/:id', (req, res) =>{
    if(req.userId){
        Carro.findById(req.params.id).then((carro) => {
            if (carro) {

                carro.marca = req.body.marca;
                carro.modelo = req.body.modelo;
                carro.ano = req.body.ano;
                carro.cor = req.body.cor;
                carro.placa = req.body.placa;
                carro.combustivel = req.body.combustivel;
                carro.cambio = req.body.cambio;

                carro.save().then(() => {
                    //salvo com sucesso
                    res.statusCode = 200;
                    res.send();
                }).catch((erro) => {
                    // Aconteceu alguma falha
                    if (erro) {
                        res.statusCode = 417;
                        res.send();
                        throw erro;
                    }
                });

            } else {
                if (condition) {
                    res.status = 417;
                    res.send();
                    throw erro;
                }
            }
        }).catch((erro) => {
        if (erro) {
            res.status = 417;
            res.send();
            throw erro;
        }
        });
    }
});

module.exports = app => app.use('/carros', router);