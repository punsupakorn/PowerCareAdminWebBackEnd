const express = require("express");
const router = express.Router();
const { getProfile } = require("../controller/ProfileController");

router.get("/:uid", async (req, res) => {
  const { uid } = req.params;
  let result = await getProfile(uid);
  // console.log("result :", result);
  res.send(result);
});

module.exports = router;
