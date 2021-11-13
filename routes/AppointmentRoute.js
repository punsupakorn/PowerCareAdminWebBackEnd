const express = require("express");
const router = express.Router();
const { addDoctorAppointment } = require("../controller/AppointmentController");
const { getDoctor } = require("../models/OfficerModels");

router.get("/", async (req, res) => {
  let result = await getDoctor();
  res.json(result);
});

router.post("/", async (req, res) => {
  const doctor = req.body.doctor;
  const date = req.body.date;
  const time = req.body.time;
  const id = req.body.id;
  let result = await addDoctorAppointment(doctor, date, time, id);
  console.log("Response Appointment : ", result);
  res.send(result);
});

module.exports = router;
