const express = require("express");
const router = express.Router();
const {
  getAllOfficer,
  deleteOfficer,
  getOfficerProfile
} = require("../controller/OfficerListController");

router.get("/", async (req, res) => {
  let result = await getAllOfficer();
  res.json(result);
});

router.delete("/", deleteOfficer);

router.get("/:position/:documentid", (req, res) => {
  const { documentid, position } = req.params;
  let result = getOfficerProfile(documentid, position);
  res.json(result);
});

module.exports = router;
