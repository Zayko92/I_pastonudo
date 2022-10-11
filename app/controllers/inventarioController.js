const {addNewMaterial, countMaterials, addBuy, addDrink, getFilteredUsers} = require("../queries/inventarioQueries");

module.exports = {

    async addNewMaterial(req, res) {


        let id = await countMaterials()
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
        await addNewMaterial(idType, update)

        res.status(200).send([
            id,
        ]);
    },

}



