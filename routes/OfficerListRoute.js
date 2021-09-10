const express = require("express");
const router = express.Router();
const {
  getAllOfficer,
  deleteOfficer
} = require("../controller/OfficerlistController");

router.get("/", async (req, res) => {
  let result = await getAllOfficer();
  res.json(result);
});

router.delete("/",deleteOfficer);

router.get("/test", (req,res) => {
  res.json("ok")
})

module.exports = router;
