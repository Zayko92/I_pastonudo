const {getFilteredUsers} = require("../queries/userQueries");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

module.exports = {
    async accessoPubblico (req, res){
        let users = await getFilteredUsers({}, 0, 300)
        let data = []
        users.forEach(user => {
            data.push({
                name: user.username,
                email: user.email
            })
        })
        res.status(200).send([
            data,
        ]);
    },

    async accessoUtente(req, res){
        res.status(200).send("Contenuto Privato.");
    },

    async infoSessione(req, res){
        console.log(req.session)
        if(!req.session.token){
            res.status(200).send([
                false,
            ]);
        } else {
            jwt.verify(req.session.token, config.secret, (err, decoded) => {
                if (err) {
                    return res.status(401).send({ message: "Utente non autorizzato" });
                }
                req.userId = decoded.id;
            });
            let query = {_id: req.userId}
            let thisUser = await getFilteredUsers(query, 0, 300)
            res.status(200).send([
                thisUser[0].username
            ]);
        }
    }
}
