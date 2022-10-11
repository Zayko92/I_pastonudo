const {addNewMaterial, countMaterials, addBuy, addDrink, getMaterials} = require("../queries/inventarioQueries");

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

    async nuovoAcquisto(req, res) {

        let update = {
            ismaterial: req.body.alcoolYes, //if not it's just another kind of expense
            prodotto: req.body.idprodotto,
            quantita: req.body.quantita,
            spesa: req.body.spesa,
        }

        let timestamp = Date.now()

        await addBuy(timestamp, update)

        if(req.body.alcoolYes === true){

            let query = {idType: req.body.idprodotto}
            let material = await getMaterials(query)

            update = {
                costo: req.body.spesa + material[0].costo,
                quantita: material[0].quantita + req.body.quantita,
            }

            let idType = req.body.idprodotto
            await addNewMaterial(idType, update)

        }

        res.status(200).send([
            'acquisto',
        ]);
    },

}



