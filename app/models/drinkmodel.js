const mongoose = require("mongoose");
const Ricetta = require("./ricetta");

const drinkModel = mongoose.model(
    "Drink",
    new mongoose.Schema({

        id: {type: Number,
            required: true,
            index: true,
            unique: true},

        nome: String,
        costo: Number,
        prezzo: Number,
        ricetta: [{
            materiaPrima: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "MateriaPrimaModel"
            },
            quantita: String //frazione di Oz
        }],
    })
);

module.exports = drinkModel;