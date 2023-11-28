/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const router = require('express').Router()
const brachControler = require('./branch.controler')

router.post('/create', brachControler.createBranch)
router.get('/all', brachControler.allBranch)
router.get('/single/:branchid', brachControler.singleBrach)
router.post('/update', brachControler.updateBrach)
router.delete('/delet', brachControler.deleteBrach)
router.delete('/deletbyid/:id', brachControler.deletebyid)

module.exports = router
