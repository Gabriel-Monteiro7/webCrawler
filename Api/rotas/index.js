const express = require('express');
const router = express.Router();

router.use('/', require('./selectAll'));

module.exports = router;