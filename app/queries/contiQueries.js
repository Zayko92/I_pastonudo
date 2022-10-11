const salemodel = require("../models/salemodel");
const salemodel = require("../models/buymodel");
const buymodel = require("../models/salemodel");

async function getSales(query = {}, page = 0,limit = 500, sort = {}) {
    return salemodel.find(query).skip(page * limit).limit(limit).sort(sort);
}

async function addSale(timestamp, update, options = { new: true, upsert: true }) {
    return salemodel.findOneAndUpdate(timestamp, update, options)
}

async function getBuys(query = {}, page = 0,limit = 500, sort = {}) {
    return buymodel.find(query).skip(page * limit).limit(limit).sort(sort);
}

async function addBuy(timestamp, update, options = { new: true, upsert: true }) {
    return buymodel.findOneAndUpdate(timestamp, update, options)
}

module.exports = {getSales, addSale, getBuys, addBuy}