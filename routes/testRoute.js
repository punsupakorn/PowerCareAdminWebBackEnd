const express = require("express");
const router = express.Router();
const { getDoctorProfile } = require("../controller/test");

router.get("/", (req, res) => {
  const { documentid } = req.params;
  let result = getDoctorProfile(documentid);
  res.json(result);
  // return result;
});

module.exports = router;
