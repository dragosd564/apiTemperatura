const storage = require('./storage')

function addTemperatura(dato) {
    return new Promise((resolve, reject) => {
        try {
            resolve(storage.add(dato))
        } catch(error) {
            reject(error)
        }
    })
}

function getTemperatura(filter) {
    return new Promise((resolve, reject) => {
        resolve(storage.get(filter))
    })
}

module.exports = {
    addTemperatura,
    getTemperatura
}