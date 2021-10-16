const express = require("express");
const router = express.Router();
const {
  editOfficer,
  getOfficerProfile,
} = require("../controller/EditOfficerController");

router.put("/", editOfficer);

router.get("/:Position/:DocumentID", (req, res) => {
  const { Position, DocumentID } = req.params;
  let result = getOfficerProfile(Position, DocumentID);
  res.json(result);
});

module.exports = router;
