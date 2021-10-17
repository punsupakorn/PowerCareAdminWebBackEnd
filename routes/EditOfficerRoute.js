const express = require("express");
const router = express.Router();
const {
  editOfficer,
  getOfficerProfile,
} = require("../controller/EditOfficerController");

router.put("/", editOfficer);

router.get("/:Position/:DocumentID", async (req, res) => {
  const { Position, DocumentID } = req.params;
  let result = await getOfficerProfile(Position, DocumentID);
  res.send(result);
});

module.exports = router;
