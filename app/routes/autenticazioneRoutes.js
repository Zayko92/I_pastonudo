const checkDuplicateSignUp = require("../middlewares/verificaRegistrazione.js");
const controller = require("../controllers/autenticazioneController.js");
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
    // parsa le richieste di content-type: application/json
    app.use(express.json());
    app.use(
        cookieSession({
            name: "chainfornoobs-session",
            secret: "COOKIE_SECRET",
            httpOnly: true,
        })
    );
    app.post(
        "/api/autenticazione/signup",
        [checkDuplicateSignUp],
        controller.signUp
    );
    app.post("/api/autenticazione/signin", controller.signIn);
    app.post("/api/autenticazione/signout", controller.signOut);
};

