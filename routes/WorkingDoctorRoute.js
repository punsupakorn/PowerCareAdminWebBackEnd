const express = require("express");
const router = express.Router();
const { getWorkingDoctor } = require("../controller/WorkingDoctorController");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let result = await getWorkingDoctor(id);
  // console.log("result : ", result);
  res.send(result);
});

module.exports = router;
