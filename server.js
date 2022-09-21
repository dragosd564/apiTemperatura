const express = require('express')
const body_parser = require('body-parser')

const config = require('./config')
const routes = require('./network/routes')
const bd = require('./bd')
const cors = require('cors');

var app = express()

bd( config.DB_URL )

var corsOptions = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:5500',"https://granjazenon.netlify.app"],
    credentials: true,
};

app.use(cors(corsOptions));

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:false}))

routes( app )

app.use(config.CLIENT_URL, express.static(config.CLIENT_DIR))
app.listen( process.env.PORT || 5000)
console.log(`La aplicacion esta escuchando en http://localhost:${config.PORT}`)