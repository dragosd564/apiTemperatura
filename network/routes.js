const express = require('express')

const user = require('../components/temperatura/network')

const routes = function(server) {
    server.use('/viento', user)
}

module.exports = routes