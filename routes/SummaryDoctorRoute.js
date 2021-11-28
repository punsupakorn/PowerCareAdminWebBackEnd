const express = require("express");
const router = express.Router();
const { getTreatment } = require("../controller/SummaryDoctorController");

router.get("/:treatmentid", async (req, res) => {
  const { treatmentid } = req.params;
  // console.log(treatmentid);
  let result = await getTreatment(treatmentid);
  res.send(result);
});

module.exports = router;
