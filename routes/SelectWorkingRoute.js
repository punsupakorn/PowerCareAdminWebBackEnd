const express = require("express");
const router = express.Router();
const { getDoctor } = require("../controller/SelectWorkingController");

router.get("/", async (req, res) => {
  let result = await getDoctor();
  res.json(result);
});

module.exports = router;
