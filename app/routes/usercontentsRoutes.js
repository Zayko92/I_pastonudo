const verifyToken = require("../middlewares/verificaJwt.js");
const contentsAllowance = require("../controllers/userController.js");
const cookieSession = require("cookie-session");
const express = require("express");

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

    app.get("/api/test/all", contentsAllowance.accessoPubblico);
    app.get("/api/test/user", [verifyToken], contentsAllowance.accessoUtente);
    app.get("/api/test/username", contentsAllowance.infoSessione);

};