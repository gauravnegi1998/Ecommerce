const express = require('express');

const studentApiRouter = express.Router();

studentApiRouter.route('/')
    .get(async (req, res) => {
        res.status(200).json({ test: 'get' })
    })
    .post(async (req, res) => {
        res.status(200).json({ test: 'pass' })
    });

studentApiRouter.route(':id')
    .get(async (req, res) => {
        res.status(200).json({ id: req?.id })
    })
    .put(async (req, res) => {

    })


module.exports = studentApiRouter;    