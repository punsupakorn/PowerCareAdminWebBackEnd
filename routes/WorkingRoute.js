const express = require("express");
const router = express.Router();
const {
  getAllAppointment,
  deleteAppointment,
} = require("../controller/WorkingController");

router.get("/", async (req, res) => {
  let result = await getAllAppointment();
  res.json(result);
});

router.delete("/", deleteAppointment);

module.exports = router;
