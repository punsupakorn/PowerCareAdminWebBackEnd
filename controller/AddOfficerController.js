const {addAdmin,addDoctor} = require("../models/OfficerModels");

const addOfficer = async (req, res) => {
  try {
    // const AdminID = req.body.AdminID;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Phone = req.body.Phone;
    const Position = req.body.Position;
    const Email = req.body.Email;
    const Password = req.body.Password;
    
    if (Position == "Admin") {
      await addAdmin(
        // AdminID,
        FirstName,
        LastName,
        Phone,
        Position,
        Email,
        Password
      );
      res.status(200).send("add admin success!");
    } else if (Position == "Doctor") {
      await addDoctor(
        // AdminID,
        FirstName,
        LastName,
        Phone,
        Position,
        Email,
        Password
      );
      res.status(200).send("add doctor success!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { addOfficer };
