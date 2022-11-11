let ricettaModel = require('../models/ricetta.js')

//query per aggiornare archivio materie prime
async function addNewRicetta(idType, update, options = { new: true, upsert: true }) {
    return ricettaModel.findOneAndUpdate({idType}, update, options)
}

async function countRicette(query) {
    return ricettaModel.count(query)
}

async function getRicette(query = {}, page = 0,limit = 500, sort = {}) {
    return ricettaModel.find(query).skip(page * limit).limit(limit).sort(sort);
}


module.exports = {addNewRicetta, countRicette, getRicette}