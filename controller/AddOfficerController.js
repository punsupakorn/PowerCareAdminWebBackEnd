const { addAdmin, addDoctor, addStaff } = require("../models/OfficerModels");

const addOfficer = async (
  FirstName,
  LastName,
  Phone,
  Position,
  Email,
  Password
) => {
  try {

    // if (Position == "Admin") {
    //   let result = await addAdmin(
    //     FirstName,
    //     LastName,
    //     Phone,
    //     Position,
    //     Email,
    //     Password
    //   );
    //   //.then(res.status(200).send("add admin success!"));
    //   //console.log(result)
    //   if (result == null) {
    //     res.status(200).send("add admin success!");
    //   } else {
    //     //res.status(500).json(result);
    //     res.status(500).send("already");
    //   }
    // } else
    if (Position == "แพทย์") {
      await addDoctor(FirstName, LastName, Phone, Position, Email, Password);
      // .then(res.status(200).send("add doctor success!"));

      let data = {
        FirstName: FirstName,
        LastName: LastName,
        Phone: Phone,
        Position: Position,
        Email: Email,
        Password: Password,
      };
      return data;
    } else if (Position == "เจ้าหน้าที่") {
      await addStaff(FirstName, LastName, Phone, Position, Email, Password);
      // .then(res.status(200).send("add staff success!"));
      let data = {
        FirstName: FirstName,
        LastName: LastName,
        Phone: Phone,
        Position: Position,
        Email: Email,
        Password: Password,
      };
      return data;
    }
  } catch (error) {
    // res.status(500).json(error);
    console.log(error);
  }
};

module.exports = { addOfficer };
