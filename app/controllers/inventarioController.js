const {addNewMaterial, countMaterials, addBuy, addDrink, getFilteredUsers} = require("../queries/inventarioQueries");
const authConfig = require("../config/auth.config");

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
            descrizione: req.body.descrizione,
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



