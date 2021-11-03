'use strict'
const express = require('express')
const user = require('../controllers/userController')
const { check, validationResult } = require('express-validator')
const router = express.Router()

const validationRegister = [
    // validasi pengecekan email
    check('Users').not().isEmpty().withMessage('required value').isArray({ min: 1}).isEmail(),
];

const validationAssigment = [
    // validasi pengecekan email
    check('user').not().isEmpty().withMessage('required value'),
    check('tasks').not().isEmpty().withMessage('required value').isArray({ min: 1}),
];

router.post(`/api/register`, [validationRegister], (req, res) =>  {
    // mengecek ke middleware apakah kondisi validasi terpenuhi atau tidak
    const errors = validationResult(req);

    // jika error kirim pesan error jika tidak lanjut ke simpan data
    (!errors.isEmpty() ? res.status(422).json(errors) : user.register(req, res))
})

router.post(`/api/assign`, [validationAssigment], (req, res) =>  {
    // mengecek ke middleware apakah kondisi validasi terpenuhi atau tidak
    const errors = validationResult(req);

    // jika error kirim pesan error jika tidak lanjut ke simpan data
    (!errors.isEmpty() ? res.status(422).json(errors) : user.assign(req, res))
})

router.post(`/api/unassign`, [validationAssigment], (req, res) =>  {
    // mengecek ke middleware apakah kondisi validasi terpenuhi atau tidak
    const errors = validationResult(req);

    // jika error kirim pesan error jika tidak lanjut ke simpan data
    (!errors.isEmpty() ? res.status(422).json(errors) : user.unassign(req, res))
})


module.exports = router