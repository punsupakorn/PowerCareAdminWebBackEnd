const express = require("express");
const router = express.Router();
const { getUser } = require("../controller/WorkingDetailController");
// const { getWorkingDetail } = require("../controller/WorkingDetailController");

router.get("/:UserID", async (req, res) => {
  const { UserID } = req.params;
  let result = await getUser(UserID);
  // console.log(result);
  res.send(result);
});

module.exports = router;
