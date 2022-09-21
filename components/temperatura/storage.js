const Model = require('./model')


async function getTemperatura(filter) {
    let new_filter = {}
    if (filter.temperatura != null) {
        new_filter = {temperatura: filter.temperatura}
    } 
    return await Model.find( new_filter )
}

module.exports = {
    get: getTemperatura,
}