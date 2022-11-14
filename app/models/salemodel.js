const mongoose = require("mongoose");
const drinkModel = require("./drinkmodel");

const saleModel = mongoose.model(
    "Sale",
    new mongoose.Schema({
        operatore: String,
        drink: {
            type: mongoose.Schema.Types.ObjectId,
            ref: drinkModel
        },
        ricavo: Number,
        timestamp: String
    })
);

module.exports = saleModel;