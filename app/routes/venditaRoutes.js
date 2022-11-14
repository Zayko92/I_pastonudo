const VenditaController = require("../controllers/venditaController");
const express = require("express");
const cookieSession = require("cookie-session");
const venditaController = require("../controllers/venditaController");

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });
    app.use(express.json());
    app.use(
        cookieSession({
            name: "pastonudo-session",
            secret: "COOKIE_SECRET",
            httpOnly: true,
        })
    );

    app.post("/api/vendita/aggiungiVendita", venditaController.addNewVendita);
};