const express = require("express");
const router = express.Router();
const { createMedicine } = require("../controller/MedicineController");

router.post("/", createMedicine);

module.exports = router;
