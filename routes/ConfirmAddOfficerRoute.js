const express = require("express");
const router = express.Router();
const {
  confirmAddOfficer,
} = require("../controller/ConfirmAddOfficcerController");

router.get("/", (req, res) => {
  const { position, documentid } = req.params;
  let result = confirmAddOfficer(position, documentid);
  res.json(result);
});

module.exports = router;
