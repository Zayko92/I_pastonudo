const mongoose = require("mongoose");

const userModel = mongoose.model(
    "User",
    new mongoose.Schema({
        id: {type: Number,
            required: true,
            index: true,
            unique: true},
        username: String,
        email: String,
        password: String,
        wallets: Array,
    })
);

module.exports = userModel;