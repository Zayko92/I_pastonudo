const mongoose = require("mongoose");

const drinkModel = mongoose.model(
    "Drink",
    new mongoose.Schema({

        id: {type: Number,
            required: true,
            index: true,
            unique: true},

        descrizione: String,
        costo: Number,
        prezzo: Number,
        materiePrime: Array,
        quantaMateria: Array,

    })
);

module.exports = drinkModel;