const verifyToken = require("./verificaJwt");
const checkDuplicateSignUp = require("./verificaRegistrazione");

module.exports = {
    verifyToken,
    checkDuplicateSignUp
};