const express = require("express");
const router = express.Router();
const {
  editOfficer,
  getOfficerProfile,
} = require("../controller/EditOfficerController");

router.put("/", editOfficer);

router.get("/:position/:documentid", (req, res) => {
  const { position, documentid } = req.params;
  let result = getOfficerProfile(position, documentid);
  res.json(result);
  // return result;
});

module.exports = router;
