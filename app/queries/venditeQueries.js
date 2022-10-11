const salemodel = require("../models/salemodel");

async function getSales(query = {}, page = 0,limit = 500, sort = {}) {
    return salemodel.find(query).skip(page * limit).limit(limit).sort(sort);
}

async function addSale(timestamp, update, options = { new: true, upsert: true }) {
    return salemodel.findOneAndUpdate(timestamp, update, options)
}

module.exports = {getSales, addSale}