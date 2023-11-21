/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
  res.send('Health route')
})

module.exports = app
