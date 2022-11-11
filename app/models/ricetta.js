const materiaPrimaModel = require("./materiaprimamodel");
const mongoose = require("mongoose");

const ricetta = mongoose.model(
    "Ricetta",
    new mongoose.Schema({

        id: {type: Number,
            required: true,
            index: true,
            unique: true},
        quantita: [{
            materiaPrima: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "MateriaPrimaModel"
            },
            quantita: String //frazione di Oz
        }],
        modilitaPreparazione: Number //strainer, shaker, etc.
    })
);

module.exports = ricetta;