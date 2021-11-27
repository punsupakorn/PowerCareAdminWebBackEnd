const express = require("express");
const router = express.Router();
const { editAppointment } = require("../controller/SummaryPostponeController");

router.put("/", async (req, res) => {
  const {
    AppointmentID,
    OldTimeTableID,
    NewTimeTableID,
    Date,
    OldTime,
    NewTime,
    olddate,
    userID,
  } = req.body;
  let result = await editAppointment(
    AppointmentID,
    OldTimeTableID,
    NewTimeTableID,
    Date,
    OldTime,
    NewTime,
    olddate,
    userID
  );

  res.send(result);
});

module.exports = router;
