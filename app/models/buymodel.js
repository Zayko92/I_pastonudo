const mongoose = require("mongoose");

const buyModel = mongoose.model(
    "Buy",
    new mongoose.Schema({

        timestamp: {type: String,
            required: true,
            index: true,
            unique: true},

        ismaterial: Bool, //if not it's just another kind of expense
        prodotto: Number,
        quantita: Number,
        spesa: Number,

    })
);

module.exports = buyModel;