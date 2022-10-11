let materiaprimamodel = require('../models/materiaprimamodel.js')
let buymodel = require('../models/salemodel.js')
let drinkmodel = require('../models/drinkmodel.js')

//query per aggiornare archivio materie prime
async function addNewMaterial(id, update, options = { new: true, upsert: true }) {
    return materiaprimamodel.findOneAndUpdate(id, update, options)
}

async function getBuys(query = {}, page = 0,limit = 500, sort = {}) {
    return buymodel.find(query).skip(page * limit).limit(limit).sort(sort);
}

async function addBuy(timestamp, update, options = { new: true, upsert: true }) {
    return buymodel.findOneAndUpdate(timestamp, update, options)
}

async function addDrink(id, update, options = { new: true, upsert: true }) {
    return drinkmodel.findOneAndUpdate(id, update, options)
}

module.exports = {addNewMaterial, getBuys, addBuy, addDrink}