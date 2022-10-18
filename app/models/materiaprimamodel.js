const mongoose = require("mongoose");

const materiaPrimaModel = mongoose.model(
    "Materials",
    new mongoose.Schema({

        idType: {type: Number,
            required: true,
            index: true,
            unique: true},

        tipo: String,
        marca: String,
        costo: Number,
        quantita: Number,
        grandezza: Number,
        qualità: Number //id livello qualità
    })
);

module.exports = materiaPrimaModel;