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
    if (Position == "ผู้ดูแลระบบ") {
      await addAdmin(FirstName, LastName, Phone, Position, Email, Password);
      let data = {
        FirstName: FirstName,
        LastName: LastName,
        Phone: Phone,
        Position: Position,
        Email: Email,
        Password: Password,
      };
      return data;
    } else if (Position == "แพทย์") {
      await addDoctor(FirstName, LastName, Phone, Position, Email, Password);
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
    console.log(error);
  }
};

module.exports = { addOfficer };
