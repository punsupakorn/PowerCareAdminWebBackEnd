const express = require("express");
const { app } = require("firebase-admin");
const router = express.Router();
const {
  getUser,
  getTreatmentWithAppointmentID,
} = require("../controller/WorkingDetailController");
// const { getWorkingDetail } = require("../controller/WorkingDetailController");

router.get("/:UserID", async (req, res) => {
  const { UserID } = req.params;
  let result = await getUser(UserID);
  // console.log(result);
  res.send(result);
});

router.post("/", async (req, res) => {
  const { AppointmentID } = req.body;
  let result = await getTreatmentWithAppointmentID(AppointmentID);
  console.log("result : ", result);
  res.send(result);
});

module.exports = router;
