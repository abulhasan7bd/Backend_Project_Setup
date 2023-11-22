/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const Branch = require('./branch.model')
const brancUtil = require('./branch.utils')
const createBranch = async data => {
  data.branchId = Date.now()
  const { branchId, branchName, address, password, userName } = data
  //     let errorMessage = {
  //         branchName:branchName == undefined ? null : "Brach Name is required",
  //         address   :address    == undefined ? null :  "Addres is required",
  //         userName  :userName   == undefined ? null :  "User name is required",
  //         password  :password   == undefined ? null :  "<PASSWORD>",
  //         branchId  : branchId  == undefined ? null : "Brach id is required"
  //     }

  //     console.log(errorMessage,"before delete");
  //     if(
  //         errorMessage.branchName == null ||
  //         errorMessage.address    == null ||
  //         errorMessage.userName   == null ||
  //         errorMessage.password   == null){
  //         errorMessage = brancUtil.removeNullValues(errorMessage)
  //     }
  // console.log(errorMessage,'after delet')
  const branch = await Branch.create({
    branchId,
    address,
    userName,
    password,
    branchName,
  })
  return branch
}
module.exports = { createBranch }
