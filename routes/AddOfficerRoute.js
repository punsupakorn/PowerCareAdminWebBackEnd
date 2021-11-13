const express = require("express");
const router = express.Router();
const {
  addOfficer,
  checkEmailExist,
} = require("../controller/AddOfficerController.js");

router.get("/:Email", async (req, res) => {
  const { Email } = req.params;
  let result = await checkEmailExist(Email);
  console.log("Check Email Exist :", result);
  res.send(result);
});

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
  console.log("Response AddOfficer: ", result);
  res.send(result);
});

module.exports = router;
