const express = require("express");
const router = express.Router();
const {
  getAppointment,
  deleteAppointment,
} = require("../controller/WorkingController");

router.get("/", async (req, res) => {
  let result = await getAppointment();
  res.json(result);
});

router.delete("/", deleteAppointment);

module.exports = router;
