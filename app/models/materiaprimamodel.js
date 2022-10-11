const mongoose = require("mongoose");

const materiaprimaModel = mongoose.model(
    "Materials",
    new mongoose.Schema({

        id: {type: Number,
            required: true,
            index: true,
            unique: true},

        descrizione: String,
        costo: Number,
        quantita: Number,

    })
);

module.exports = materiaprimaModel;