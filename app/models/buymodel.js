const mongoose = require("mongoose");

const buyModel = mongoose.model(
    "Buy",
    new mongoose.Schema({

        id: {type: Number,
            required: true,
            index: true,
            unique: true},
        ismaterial: Boolean, //if not it's just another kind of expense
        prodotto: Number,
        quantita: Number,
        spesa: Number,
        timestamp: String

    })
);

module.exports = buyModel;