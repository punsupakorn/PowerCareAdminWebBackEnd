const express = require("express");
const router = express.Router();
const {
  getAppointmentWithAppointmentID,
} = require("../controller/PushVdoController");
const { getUser } = require("../controller/PushVdoController");

router.get("/:appointmentid", async (req, res) => {
  const { appointmentid } = req.params;
  let result = await getAppointmentWithAppointmentID(appointmentid);
  console.log(result);
  res.send(result);
});

router.get("/user/:userid", async (req, res) => {
  const { userid } = req.params;
  let result = await getUser(userid);
  console.log(result);
  res.send(result);
});

module.exports = router;
