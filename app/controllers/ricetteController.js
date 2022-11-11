const {addNewRicetta, countRicette, getRicette} = require("../queries/ricetteQueries");

module.exports = {

    async addNewRicetta(req, res) {
        console.log("diocan")

        let id = await countRicette()
        if (id == null) {
            id = 1
        } else {
            id++
        }

        let update = {
            idType: id,
            tipo: req.body.tipo,
            marca: req.body.marca,
            costo: req.body.costo,
            quantita: req.body.quantita,
            grandezza: req.body.grandezza
        }

        let idType = id
        await addNewRicetta(idType, update)

        res.status(200).send([
            id,
        ]);
    },

}



