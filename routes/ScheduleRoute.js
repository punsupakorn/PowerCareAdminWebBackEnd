const express = require("express");
const router = express.Router();
const {
  getAllTimeTable,
  deleteDoctorSlot,
} = require("../controller/ScheduleController");

router.get("/", async (req, res) => {
  let result = await getAllTimeTable();
  res.json(result);
});

router.delete("/", deleteDoctorSlot);

module.exports = router;
