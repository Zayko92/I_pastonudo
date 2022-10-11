const mongoose = require("mongoose");

const saleModel = mongoose.model(
    "Sale",
    new mongoose.Schema({

        timestamp: {type: String,
                    required: true,
                    index: true,
                    unique: true},

        operatore: String,
        prodotto: Number,
        ricavo: Number,

    })
);

module.exports = saleModel;