let materiaprimamodel = require('../models/materiaprimamodel.js')
let buymodel = require('../models/buymodel.js')
let drinkmodel = require('../models/drinkmodel.js')

//query per aggiornare archivio materie prime
async function addNewMaterial(idType, update, options = { new: true, upsert: true }) {
    return materiaprimamodel.findOneAndUpdate({idType}, update, options)
}

async function countMaterials(query) {
    return materiaprimamodel.count(query)
}

async function getMaterials(query = {}, page = 0,limit = 500, sort = {}) {
    return materiaprimamodel.find(query).skip(page * limit).limit(limit).sort(sort);
}


async function getBuys(query = {}, page = 0,limit = 500, sort = {}) {
    return buymodel.find(query).skip(page * limit).limit(limit).sort(sort);
}

async function addBuy(timestamp, update, options = { new: true, upsert: true }) {
    return buymodel.findOneAndUpdate({timestamp}, update, options)
}

async function addDrink(id, update, options = { new: true, upsert: true }) {
    return drinkmodel.findOneAndUpdate({id}, update, options)
}

module.exports = {addNewMaterial, countMaterials, getBuys, addBuy, addDrink, getMaterials}