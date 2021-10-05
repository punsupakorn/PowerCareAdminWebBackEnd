const { addTimeTable } = require("../models/ScheduleModels");

const addDoctorAppointment = async (req, res) => {
  try {
    const doctor = req.body.doctor;
    const date = req.body.date;
    const time = req.body.time;

    for (let i = 0; i < date.length; i++) {
      const element = date[i];
      await addTimeTable(doctor, element, time);
      // res.status(200).send("add doctor appointment to TimeTable success!");
    }
  } catch (error) {
    return error;
  }
};

module.exports = { addDoctorAppointment };
