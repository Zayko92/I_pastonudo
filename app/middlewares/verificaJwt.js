const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");


verifyToken = (req, res, next) => {
    let token = req.session.token;

    if (!token) {
        return res.status(403).send({ message: "Jwt Token non presente in questa sessione" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Utente non autorizzato" });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;