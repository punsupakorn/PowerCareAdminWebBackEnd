const express = require("express");
const router = express.Router();
const { getAppointment } = require("../controller/WorkingController");

router.get("/", async (req, res) => {
  let result = await getAppointment();
  res.json(result);
});

module.exports = router;
