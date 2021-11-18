const express = require("express");
const router = express.Router();
const {
  getDoctorProfile,
} = require("../controller/HomescreenDoctorController");

router.get("/:documentid", async (req, res) => {
  const { documentid } = req.params;
  let result = await getDoctorProfile(documentid);
  res.send(result);
});

module.exports = router;
