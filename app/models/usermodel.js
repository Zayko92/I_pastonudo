const mongoose = require("mongoose");

const userModel = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        wallets: Array,
    })
);

module.exports = userModel;