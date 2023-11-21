/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require('mongoose')

const branchSchema = new mongoose.Schema(
  {
    branchId: {
      type: Number,
      required: true,
    },
    branchName: {
      type: String,
      required: [true, 'Enter Branch Name'],
    },
    address: {
      type: String,
      required: [true, 'Enter Address Name'],
    },
    userName: {
      type: String,
      required: [true, 'Enter User Name'],
    },
    password: {
      type: Number,
      required: [true, 'Enter User Password'],
    },
  },
  {
    timestamps: true,
  },
)

const Branch = mongoose.model('Branch', branchSchema)
module.exports = Branch
