const { response, json } = require('express');
const express = require('express');
const router = express.Router();
const {addSlot} = require('../controller/slotcontroller');
const {getAllDoctor} = require('../models/slotmodel')

router.get('/',async(req,res)=>{
    let result = await getAllDoctor()
    res.json(result)
});

router.post('/',addSlot);


module.exports = router ;