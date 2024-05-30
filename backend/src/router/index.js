
const express = require('express');
const customerApisRouter = require('./Apis/customerApis');

const router = express.Router();


router.use('/api/customers', customerApisRouter);

module.exports = router;