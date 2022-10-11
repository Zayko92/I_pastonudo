const userModel = require("../models/usermodel.js");

checkDuplicateSignUp = (req, res, next) => {
    // Username
    userModel.findOne({
        username: req.body.username
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "username gia in uso..." });
            return;
        }

        // Email
        userModel.findOne({
            email: req.body.email
        }).exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (user) {
                res.status(400).send({ message: "email gia in uso..." });
                return;
            }

            next();
        });
    });
};


module.exports = checkDuplicateSignUp;