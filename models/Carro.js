//Imports
const mongoose = require("mongoose");

const CarroSchema = new mongoose.Schema({

    marca:{
        type: String,
        require: true,
        required: true,
    },
    modelo:{
        type: String,
        require: true,
        required: true,
    },
    ano:{
        type: Number,
        require: true,
        required: true,
    },
    cor:{
        type: String,
        require: true,
        required: true,
    },
    placa:{
        type: String,
        require: true,
        required: true,
    },
    combustivel:{
        type: String,
        require: true,
        required: true,
    },
    cambio:{
        type: String,
        require: true,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const Carro = mongoose.model('Carro', CarroSchema);

module.exports = Carro;
