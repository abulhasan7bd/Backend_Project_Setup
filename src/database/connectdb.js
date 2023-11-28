/* eslint-disable no-undef */
const mongoose = require('mongoose')
const { DATABASE } = require('../confiq/index')
const logger = require('../logger/logger')
const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE)
    // console.log(`Database is connection succesfull [MnogoDB_Server]`)
    logger.successLogger.info('Database connection established')
  } catch (err) {
    // console.log(`Database connection faile! [MnogoDB_Server]`)
    // logger.error(err.message)
    logger.errotLogger.error(err.message)
  }
}

module.exports = connectDB
