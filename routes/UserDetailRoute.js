const express = require("express");
const router = express.Router();
const {
  getUserProfile,
  getUserAppointment,
} = require("../controller/UserDetailController");

router.get("/:userid", async (req, res) => {
  const { userid } = req.params;
  let UserResult = await getUserProfile(userid);
  res.send(UserResult);
});

module.exports = router;
