const express = require("express");
const router = express.Router();
const {
  getAllOfficer,
  deleteOfficer
} = require("../controller/OfficerListController");

router.get("/", async (req, res) => {
  let result = await getAllOfficer();
  res.json(result);
});

router.delete("/",deleteOfficer);

module.exports = router;
