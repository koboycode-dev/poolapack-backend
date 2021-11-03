'use strict'
const express = require('express')
const tasks = require('../controllers/tasksController')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const validationTasks = [
    // validasi pengecekan email
    check('user').not().isEmpty().withMessage('required value').isArray({ min: 1 }).isEmail(),
];
router.get(`/api/tasks/common`, [validationTasks], (req, res) => {
    // mengecek ke middleware apakah kondisi validasi terpenuhi atau tidak
    const errors = validationResult(req);

    // jika error kirim pesan error jika tidak lanjut ke simpan data
    (!errors.isEmpty() ? res.status(422).json(errors) : tasks.common(req, res))
})

module.exports = router