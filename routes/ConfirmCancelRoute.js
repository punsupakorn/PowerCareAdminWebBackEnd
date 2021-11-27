const express = require("express");
const router = express.Router();
const { getUser } = require("../controller/WorkingDetailController");
const { route } = require("./SummaryPostponeRoute");
const { deleteAppointment } = require("../controller/ConfirmCancelController");
// const { getWorkingDetail } = require("../controller/WorkingDetailController");

router.get("/:UserID", async (req, res) => {
  const { UserID } = req.params;
  let result = await getUser(UserID);
  // console.log(result);
  res.send(result);
});

router.delete("/", async (req, res) => {
  const AppointmentID = req.body.AppointmentID;
  const TimeTableID = req.body.TimeTableID;
  const Time = req.body.Time;
  let result = await deleteAppointment(AppointmentID, TimeTableID, Time);
  console.log("result :", result);
  res.send(result);
});

module.exports = router;
