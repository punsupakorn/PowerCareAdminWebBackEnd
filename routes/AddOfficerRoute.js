const { response } = require("express");
const express = require("express");
const router = express.Router();
const { addOfficer } = require("../controller/AddOfficerController.js");

router.post("/", async (req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Phone = req.body.Phone;
  const Position = req.body.Position;
  const Email = req.body.Email;
  const Password = req.body.Password;

  let result = await addOfficer(
    FirstName,
    LastName,
    Phone,
    Position,
    Email,
    Password
  );
  //   console.log(result);
  res.send(result);
});

module.exports = router;
