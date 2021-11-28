const express = require("express");
const router = express.Router();
const { pushSummary } = require("../controller/PushSummaryController");

router.post("/", async (req, res) => {
  const {
    treatmentid,
    appointmentid,
    medicinequantity,
    otherserviceprice,
    otherservicedesc,
    totalprice,
    date,
    time,
  } = req.body;

  let result = await pushSummary(
    treatmentid,
    appointmentid,
    medicinequantity,
    otherserviceprice,
    otherservicedesc,
    totalprice,
    date,
    time
  );
  // console.log("result :", result);
  res.send(result);
});

module.exports = router;
