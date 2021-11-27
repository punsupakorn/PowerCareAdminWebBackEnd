const express = require("express");
const router = express.Router();
const {
  getAppointmentWithAppointmentID,
  getUser,
  pushMessage,
} = require("../controller/PushVdoController");
// const { getUser } = require("../controller/PushVdoController");

router.get("/:appointmentid", async (req, res) => {
  const { appointmentid } = req.params;
  let result = await getAppointmentWithAppointmentID(appointmentid);
  // console.log(result); 
  res.send(result);
});

router.get("/user/:userid", async (req, res) => {
  const { userid } = req.params;
  let result = await getUser(userid);
  // console.log(result);
  res.send(result);
});

router.post("/", async (req, res) => {
  const { userId, appointmentId, meetingLink } = req.body;
  // console.log(req.body);
  let result = await pushMessage(userId, appointmentId, meetingLink);
  // console.log("result :",result);
  res.send(result);
});

module.exports = router;
