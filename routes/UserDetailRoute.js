const express = require("express");
const router = express.Router();
const { userDetail } = require("../controller/UserDetailController");

router.get("/:userid", async (req, res) => {
  const { userid } = req.params;
  let UserResult = await userDetail(userid);
  res.send(UserResult);
});

module.exports = router;
