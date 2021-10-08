const express = require("express");
const router = express.Router();
const {
  getAllUser,
  deleteUser,
} = require("../controller/UserController");

router.get("/", async (req, res) => {
  let result = await getAllUser();
  res.json(result);
});



router.delete("/", deleteUser);

module.exports = router;
