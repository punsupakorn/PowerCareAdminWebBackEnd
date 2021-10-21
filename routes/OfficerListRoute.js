const express = require("express");
const router = express.Router();
const {
  getAllOfficer,
  deleteOfficer,
  getOfficerProfile,
} = require("../controller/OfficerListController");

router.get("/", async (req, res) => {
  let result = await getAllOfficer();
  res.json(result);
});

router.delete("/", async (req, res) => {
  const DocumentID = req.body.DocumentID;
  const Position = req.body.Position;
  let result = await deleteOfficer(Position, DocumentID);
  res.send(result);
});

module.exports = router;
