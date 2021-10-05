const { addAdmin, addDoctor, addStaff } = require("../models/OfficerModels");

const addOfficer = async (req, res) => {
  // try {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Phone = req.body.Phone;
  const Position = req.body.Position;
  const Email = req.body.Email;
  const Password = req.body.Password;

  if (Position == "Admin") {
    let result = await addAdmin(
      FirstName,
      LastName,
      Phone,
      Position,
      Email,
      Password
    );
    //.then(res.status(200).send("add admin success!"));
    //console.log(result)
    if (result == null) {
      res.status(200).send("add admin success!");
    } else {
      //res.status(500).json(result);
      res.status(500).send("already");
    }
  } else if (Position == "Doctor") {
    await addDoctor(FirstName, LastName, Phone, Position, Email, Password).then(
      res.status(200).send("add doctor success!")
    );
  } else if (Position == "Staff") {
    await addStaff(FirstName, LastName, Phone, Position, Email, Password).then(
      res.status(200).send("add staff success!")
    );
  }
  // } catch (error) {
  //   res.status(500).json(error);
  //   console.log(error);
  // }
};

module.exports = { addOfficer };
