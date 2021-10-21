const express = require("express");
const router = express.Router();
const {
  editOfficer,
  getOfficerProfile,
} = require("../controller/EditOfficerController");

router.put("/", async (req, res) => {
  const DocumentID = req.body.DocumentID;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Phone = req.body.Phone;
  // const Position = req.body.Position;
  const Email = req.body.Email;
  const Password = req.body.Password;

  let result = await editOfficer(
    DocumentID,
    FirstName,
    LastName,
    Phone,
    Email,
    Password
  );
  res.send(result);
});

router.get("/:Position/:DocumentID", async (req, res) => {
  const { Position, DocumentID } = req.params;
  let result = await getOfficerProfile(Position, DocumentID);
  // console.log("result : ", result);
  res.send(result);
});

module.exports = router;
