'use strict'
const express = require('express')
const tasks = require('./tasksRoutes')
const user = require('./userRoutes')
const router = express()

router.get(`/api/v1/`, (_req, res) => {
  res.json({
    "message": "Poolpack testing Backend"
  })
})

router.use(tasks)
router.use(user)

module.exports = router