const express = require("express");
const router = express.Router();
const { getAllMedicine } = require("../controller/MedicineController");

router.get("/", async (req, res) => {
  let result = await getAllMedicine();
  res.json(result);
});

module.exports = router;
