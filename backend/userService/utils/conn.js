const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'DB ERROR: '))

module.exports = {db, mongoose}