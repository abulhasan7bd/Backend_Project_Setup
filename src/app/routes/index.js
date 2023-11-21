/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express')
const router = express.Router()
const branchRouter = require('../modules/branch/branch.rout')

router.use('/branch', branchRouter)

module.exports = router
