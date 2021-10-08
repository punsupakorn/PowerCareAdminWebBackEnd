const express = require("express");
const router = express.Router();
const {
  getMedicine,
  createMedicine,
} = require("../controller/ManageMedicineController");

router.post("/", createMedicine);

router.get("/:medicineid", (req, res) => {
  const { medicineid } = req.params;
  let result = getMedicine(medicineid);
  res.json(result);
});

module.exports = router;
