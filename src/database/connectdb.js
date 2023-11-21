/* eslint-disable no-undef */
const mongoose = require('mongoose')
const { DATABASE } = require('../confiq/index')
const connectDB = async () => {
  try {
    mongoose.connect(DATABASE)
    console.log(`Database is connection succesfull [MnogoDB_Server]`)
  } catch (err) {
    console.log(`Database connection faile! [MnogoDB_Server]`)
  }
}

module.exports = connectDB
