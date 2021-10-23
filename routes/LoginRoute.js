const express = require("express");
const router = express.Router();
const { checkRole } = require("../controller/LoginController");
// const { isStaff } = require("../models/OfficerModels");

router.get("/:Email", async (req, res) => {
  const { Email } = req.params;
  let result = await checkRole(Email);
  // console.log(result);
  res.send(result);
});

module.exports = router;
