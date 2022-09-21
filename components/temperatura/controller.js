const storage = require('./storage')

function getTemperatura(filter) {
    return new Promise((resolve, reject) => {
        resolve(storage.get(filter))
    })
}

module.exports = {
    getTemperatura
}