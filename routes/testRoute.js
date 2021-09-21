const express = require("express");
const router = express.Router();

// const { update } = require("../controller/test");
const { getAdminProfile } = require("../controller/test");

// router.get("/", async (req, res) => {
//   let result = await update();
//   res.json(result);
// });

// router.get("/", async (req, res) => {
//   let result = await getAdminProfile();
//   res.json(result);
// });

module.exports = router;
