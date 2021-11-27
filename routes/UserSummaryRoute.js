const express = require("express");
const router = express.Router();
const { addTreatment } = require("../controller/UserSummaryController");

router.post("/", async (req, res) => {
  const {
    AppointmentID,
    Description,
    MedicineQuantity,
    TotalPrice,
    UserID,
    OtherServiceDescription,
    OtherServicePrice,
  } = req.body;

  let result = await addTreatment(
    AppointmentID,
    Description,
    MedicineQuantity,
    TotalPrice,
    UserID,
    OtherServiceDescription,
    OtherServicePrice
  );
  // console.log("Response AddOfficer: ", result);
  res.send(result);
});
module.exports = router;
