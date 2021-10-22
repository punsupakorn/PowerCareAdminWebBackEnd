const express = require("express");
const router = express.Router();
const {
  editOfficer,
  getOfficerProfile,
  checkOldPassword,
} = require("../controller/EditOfficerController");

router.put("/", async (req, res) => {
  const DocumentID = req.body.DocumentID;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Phone = req.body.Phone;
  const Password = req.body.Password;
  const Position = req.body.Position;

  let result = await editOfficer(
    DocumentID,
    FirstName,
    LastName,
    Phone,
    Password,
    Position
  );
  res.send(result);
});

router.get("/getprofile/:Position/:DocumentID", async (req, res) => {
  const { Position, DocumentID } = req.params;
  let result = await getOfficerProfile(Position, DocumentID);
  // console.log("result : ", result);
  res.send(result);
});

router.get("/:Position/:DocumentID/:Password", async (req, res) => {
  const { Position, DocumentID, Password } = req.params;
  let result = await checkOldPassword(Position, DocumentID, Password);
  // console.log("result : ", result);
  res.send(result);
});

module.exports = router;
