HOST = "localhost"
PORT = 27017
DB = "user_cfn_db"
DBURL = `mongodb://${HOST}:${PORT}/${DB}`
ipVersion = 4  //eventualmente da cambiare con la versione 6

module.exports = {DBURL, ipVersion}