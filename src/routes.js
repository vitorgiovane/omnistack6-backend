const express = require('express')
const mongoose = require('mongoose')

const routes = express.Router()

routes.get('/test', (req, res) => {
  return res.send('Hello, Vitor!')
})

module.exports = routes