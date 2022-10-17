const mongoose = require("mongoose");

const saleModel = mongoose.model(
    "Sale",
    new mongoose.Schema({

        id: {type: Number,
            required: true,
            index: true,
            unique: true},
        operatore: String,
        prodotto: Number,
        ricavo: Number,
        timestamp: String

    })
);

module.exports = saleModel;