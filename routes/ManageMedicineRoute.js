const express = require("express");
const router = express.Router();
const {
  getMedicine,
  createMedicine,
  removeMedicine,
} = require("../controller/ManageMedicineController");

router.post("/", createMedicine);

router.get("/:medicineid", async (req, res) => {
  const { medicineid } = req.params;
  let result = await getMedicine(medicineid);
  // console.log("result :", result);
  res.json(result);
});

router.delete("/", removeMedicine);

module.exports = router;
