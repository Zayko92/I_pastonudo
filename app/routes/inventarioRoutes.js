const inventarioController = require("../controllers/inventarioController.js");
const express = require("express");
const cookieSession = require("cookie-session");

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
            name: "chainfornoobs-session",
            secret: "COOKIE_SECRET",
            httpOnly: true,
        })
    );

    app.post("/api/inventario/aggiungiMateria", inventarioController.addNewMaterial);
};