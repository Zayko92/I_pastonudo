const authConfig = require("../config/auth.config");
const userModel = require("../models/usermodel.js");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const cookieSession = require("cookie-session");

exports.signUp = (req, res) => {
    const thisUser = new userModel({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    thisUser.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.send({ message: "Utente registrato con successo" });

    });
};

exports.signIn = (req, res) => {

    userModel.findOne({
        username: req.body.username,
    })
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "L'utente non esiste" });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({ message: "La password inserita non è valida" });
            }

            var token = jwt.sign({ id: user.id }, authConfig.secret,
                {expiresIn: 86400} // 24 hours
            );

            req.session.token = token;

            res.status(200).send({
                id: user._id,
                username: user.username,
                email: user.email,
            });
            console.log('utente autenticato')
            console.log(req.session)
        });
};


exports.signOut = async (req, res) => {
    try {
        req.session = null;
        return res.status(200).send({ message: "Log Out effettuato con successo" });
    } catch (err) {
        this.next(err);
    }
};