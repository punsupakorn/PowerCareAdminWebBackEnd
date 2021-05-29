const express = require('express');
const router = express.Router();
const {getAllTimeTable,getTimeInTable} = require('../models/appointmentlistmodel');

router.get('/',async(req,res)=>{
    let result = await getAllTimeTable()
    res.json(result)
});

module.exports = router ;