/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const router = require('express').Router()
const brachControler = require('./branch.controler')

router.get('/check', (req, res) => {
  res.status(201).send('Hellow')
  console.log('rout')
})

router.post('/create', brachControler.createBranch)

module.exports = router
