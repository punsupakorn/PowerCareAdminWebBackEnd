const express = require("express");
const router = express.Router();
const { checkRole } = require("../controller/LoginController");
// const {isStaff} =require("../models/OfficerModels")

router.get("/:Email/:Password", async (req, res) => {
  const { Email, Password } = req.params;
  let result = await checkRole(Email, Password);
  // console.log("result : ", result);
  res.send(result);
});

module.exports = router;
