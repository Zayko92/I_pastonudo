const {getSales, addSale} = require("../queries/venditeQueries");

module.exports = {

    async addNewVendita(req, res) {
        let update = {
            operatore: req.body.operatore,
            drink: req.body.drink,
            ricavo: req.body.ricavo,
            timestamp: req.body.timestamp
        }

        let idType = id
        await addSalse(update);

        res.status(200).send([
            id,
        ]);
    }


}