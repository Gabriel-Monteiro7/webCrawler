const express = require('express');
const router = express.Router();
const data = require('../../spider')

router.get('/',(req,res)=>{
    res.json(data)
})

module.exports = router;