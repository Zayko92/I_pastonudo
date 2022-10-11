let userModel = require('../models/usermodel.js')

async function getFilteredUsers(query = {}, page = 0,limit = 500, sort = {}) {
    return userModel.find(query).skip(page * limit).limit(limit).sort(sort);
}

module.exports = {getFilteredUsers}