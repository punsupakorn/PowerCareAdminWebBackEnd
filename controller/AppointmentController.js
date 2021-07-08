const {addTimeTable} = require("../models/AppointmentModels");

const addDoctorAppointment = async(req,res)=>{
    try {
        const doctor = req.body.doctor
        const date = req.body.date
        const time = req.body.time
        await addTimeTable(doctor,date,time)
        res.status(200).send('add doctor time slot success!')
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports={addDoctorAppointment};
