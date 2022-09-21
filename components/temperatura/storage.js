const Model = require('./model')

function addTemperatura(data) {
    const my_data = new Model(data)
    return my_data.save()
}

async function getTemperatura(filter) {
    let new_filter = {}
    if (filter.temperatura != null) {
        new_filter = {temperatura: filter.temperatura}
    } 
    return await Model.find( new_filter )
}

module.exports = {
    add: addTemperatura,
    get: getTemperatura,
}