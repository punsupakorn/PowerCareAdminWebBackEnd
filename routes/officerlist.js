const { response, json } = require('express');
const express = require('express');
const router = express.Router();
const {getAllOfficer} = require('../models/officerlistmodel');

router.get('/',async(req,res)=>{
    let result = await getAllOfficer()
    res.json(result)
});

module.exports = router;