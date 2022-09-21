const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    user: String,
    name: String,
    last_name: String
})

const model = mongoose.model('temperatura', dataSchema)
module.exports = model