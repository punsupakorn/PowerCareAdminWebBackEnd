const express = require('express');
const router = express.Router();
const {getAllTimeTable,removeAppointment} = require("../controller/ScheduleController");

router.get('/',async(req,res)=>{
    let result = await getAllTimeTable()
    res.json(result)
});

router.delete('/',removeAppointment);

module.exports = router ;