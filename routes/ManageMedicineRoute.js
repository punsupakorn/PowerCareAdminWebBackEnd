const express = require("express");
const router = express.Router();
const {
  getMedicine,
  createMedicine,
  removeMedicine,
  updateMedicine,
} = require("../controller/ManageMedicineController");

router.post("/", async (req, res) => {
  const Name = req.body.MedicineName;
  const Description = req.body.MedicineDescription;
  const Price = req.body.Price;
  const Type = req.body.Type;
  let result = await createMedicine(Name, Description, Price, Type);
  res.send(result);
});

router.get("/:medicineid", async (req, res) => {
  const { medicineid } = req.params;
  let result = await getMedicine(medicineid);
  res.json(result);
});

router.put("/", async (req, res) => {
  const { MedicineID, Name, Description, Price, Type } = req.body;
  let result = await updateMedicine(MedicineID, Name, Description, Price, Type);
  res.send(result);
});

router.delete("/", removeMedicine);

module.exports = router;
