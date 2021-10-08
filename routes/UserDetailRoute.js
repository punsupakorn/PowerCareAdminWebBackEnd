const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  getUserAppointment,
} = require("../controller/UserDetailController");

router.get("/:userid", (req, res) => {
  const { userid } = req.params;
  let UserResult = getUserProfile(userid);
  let AppointmentResult = getUserAppointment(userid);
  res.json({ "UserProfile" : UserResult,"AppointmentDetail" : AppointmentResult });
});

module.exports = router;
