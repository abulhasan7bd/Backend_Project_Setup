/* eslint-disable no-undef */
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT
const DATABASE = process.env.DATABASE

module.exports = { port, DATABASE }
