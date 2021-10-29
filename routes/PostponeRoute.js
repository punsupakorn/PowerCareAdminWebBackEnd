const express = require("express");
const router = express.Router();
const { getUser } = require("../controller/WorkingDetailController");
const { getDateChange, getTime } = require("../controller/PostPoneController");

router.get("/:UserID", async (req, res) => {
  const { UserID } = req.params;
  let result = await getUser(UserID);
  // console.log(result);
  res.send(result);
});

router.get("/date/:doctorid", async (req, res) => {
  const { doctorid } = req.params;
  let result = await getDateChange(doctorid);
  // console.log("result : ", result);
  res.send(result);
});

router.get("/time/:timetableid", async (req, res) => {
  const { timetableid } = req.params;
  let result = await getTime(timetableid);
  res.send(result);
});
module.exports = router;
