/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const routes = require('../src/app/routes/index')
const app = express()
app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.send('Health route')
})

app.use('/api/v1', routes)

module.exports = app
