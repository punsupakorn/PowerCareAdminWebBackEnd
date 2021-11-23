const express = require("express");
const router = express.Router();
const {
  getAllAppointment,
  deleteAppointment,
  getDoctorProfile,
} = require("../controller/WorkingController");

router.get("/", async (req, res) => {
  let result = await getAllAppointment();
  // console.log("Result : ", result);
  res.json(result);
});

router.post("/", async (req, res) => {
  const { DoctorID } = req.body;
  let result = await getDoctorProfile(DoctorID);
  // console.log(result);
  res.send(result);
});

router.delete("/", deleteAppointment);

module.exports = router;
