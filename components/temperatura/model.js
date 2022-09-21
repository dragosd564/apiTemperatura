const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dataSchema = new Schema({
    mes:String,
    nudo: Number,
    intencidad: Number,
    viento_norte: Number,
    viento_nordeste: Number,
    viento_este: Number,
    viento_surdeste: Number,
    viento_sur: Number,
    viento_suroeste: Number,
    viento_oeste: Number,
    viento_noroeste: Number
})

const model = mongoose.model('temperatura', dataSchema)
module.exports = model