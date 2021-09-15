const express = require("express");
const router = express.Router();
const { createMedicine,getMedicine } = require("../controller/MedicineController");

router.get("/",async(req,res)=>{
    let result = await getMedicine();
    res.json(result); 
})

router.post("/", createMedicine);

module.exports = router;
