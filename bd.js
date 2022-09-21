const db = require('mongoose')

db.Promise = global.Promise

async function conexion(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbname: 'temperatura'
    })
    .then(() => console.log(`[db] - conexion exitosa.`))
    .catch((error) => console.error(`[db] - ${error}`))
}

module.exports = conexion