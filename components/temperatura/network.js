const express = require('express')

const response = require('../../network/response')
const controller = require('./controller')

const route = express.Router()

route.get('/', function(req, res){
    const filterUsers = req.body || null
    controller.getTemperatura(filterUsers)
        .then( (dato) => response.success(req, res, dato, 200) )
        .catch( (dato) => response.error(req, res, dato, 500) )
})

module.exports = route