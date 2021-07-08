const express = require('express');
const router = express.Router();
const {getAllOfficer} = require('../controller/OfficerListController');

router.get('/',async(req,res)=>{
    let result = await getAllOfficer()
    res.json(result)
});

module.exports = router;