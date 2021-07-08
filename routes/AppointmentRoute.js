const express = require('express');
const router = express.Router();
const {addDoctorAppointment} = require("../controller/AppointmentController");
const {getDoctor} = require("../models/OfficerModels")

router.get('/',async(req,res)=>{
    let result = await getDoctor()
    res.json(result)
});

router.post('/',addDoctorAppointment);


module.exports = router ;