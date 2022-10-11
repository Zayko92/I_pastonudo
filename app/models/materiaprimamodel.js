const mongoose = require("mongoose");

const materiaprimaModel = mongoose.model(
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


    })
);

module.exports = materiaprimaModel;