/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const Branch = require('./branch.model')
const createBranch = async (req, res) => {
  try {
    req.body.branchId = Date.now()
    const id = req.body.branchId
    const name = req.body.branchName
    const address = req.body.address
    const userName = req.body.userName
    const password = req.body.password
    console.log(id, name, address, userName, password)
    const data = await new Branch(req.body)
    data
      .save()
      .then(() => {
        res.send({
          save: data,
        })
      })
      .catch(() => {
        console.log('erro')
      })
  } catch (err) {
    console.log('err', err)
  }
}

const brachControler = {
  createBranch: createBranch,
}

module.exports = brachControler
