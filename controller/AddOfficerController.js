const {
  addAdmin,
  addDoctor,
  addStaff,
  emailAdminExist,
  emailDocotrExist,
  emailStaffExist,
} = require("../models/OfficerModels");

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
      let result = await addAdmin(
        FirstName,
        LastName,
        Phone,
        Position,
        Email,
        Password
      );
      if (result == false) {
        return "Exist";
      } else {
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

const checkEmailExist = async (Email) => {
  const staffExist = await emailStaffExist(Email);
  const doctorExist = await emailDocotrExist(Email);
  const adminExist = await emailAdminExist(Email);
  if (staffExist == false) {
    return false;
  } else if (adminExist == false) {
    return false;
  } else if (doctorExist == false) {
    return false;
  } else {
    return true;
  }
};

module.exports = { addOfficer, checkEmailExist };
