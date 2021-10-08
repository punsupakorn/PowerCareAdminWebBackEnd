const express = require("express");
const router = express.Router();
const {
  getMedicine,
  createMedicine,
  removeMedicine
} = require("../controller/ManageMedicineController");

router.post("/", createMedicine);

router.get("/:medicineid", (req, res) => {
  const { medicineid } = req.params;
  let result = getMedicine(medicineid);
  res.json(result);
});

router.delete("/", removeMedicine);

module.exports = router;
