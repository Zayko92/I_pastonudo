const mongoose = require("mongoose");
const Ricetta = require("./ricetta");

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
        ricetta: Ricetta
    })
);

module.exports = drinkModel;