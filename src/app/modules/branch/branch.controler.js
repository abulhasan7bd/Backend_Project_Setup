/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// const id = req.body.branchId
// const name = req.body.branchName
// const address = req.body.address
// const userName = req.body.userName
// const password = req.body.password

const brachService = require('./branch.service')
const Brach = require('./branch.model')

const createBranch = async (req, res) => {
  try {
    const branch = await brachService.createBranch(req.body)
    res.status(201).json({
      succes: true,
      message: 'Brach created succesfully',
      result: 'founded',
    })
  } catch (err) {
    res.status(401).json({
      succes: false,
      error: err.message,
    })
  }
}

const singleBrach = async (req, res) => {
  try {
    const singleBrachf = await Brach.find({ branchId: req.params.branchid })
    console.log(singleBrachf)
    res.status(201).json({
      succes: true,
      message: 'Brach found succesfully',
      result: singleBrachf,
    })
  } catch (err) {
    res.status(401).json({
      succes: false,
      error: err.message,
    })
  }
}

const allBranch = async (req, res) => {
  try {
    const allBrach = await Brach.find()
    res.status(201).json({
      succes: true,
      message: 'allBrach found succesfully',
      result: allBrach,
    })
  } catch (err) {
    res.status(401).json({
      succes: false,
      error: err.message,
    })
  }
}
const updateBrach = async (req, res) => {}

const deleteBrach = async (req, res) => {
  try {
    await Brach.deleteMany({})
    res.send({
      delete: 'succesful',
    })
  } catch (err) {
    res.status(401).send({
      message: err.message,
      delete: false,
    })
  }
}

const deletebyid = async (req, res) => {
  try {
    let deletid = req.params.id
    await Brach.deleteOne({ _id: deletid })
    res.status(201).send({
      deletebyid: 'succesfull',
    })
  } catch (err) {
    console.log('err deletbyid', err)
  }
}
const brachControler = {
  createBranch: createBranch,
  singleBrach: singleBrach,
  allBranch: allBranch,
  updateBrach: updateBrach,
  deleteBrach: deleteBrach,
  deletebyid: deletebyid,
}

module.exports = brachControler
