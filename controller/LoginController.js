const { isStaff, isAdmin, isDoctor } = require("../models/OfficerModels");

const checkRole = async (Email, Password) => {
  const checkStaff = await isStaff(Email, Password);
  const checkAdmin = await isAdmin(Email, Password);
  const checkDoctor = await isDoctor(Email, Password);
  if (checkStaff == true) {
    return "เจ้าหน้าที่";
  } else if (checkAdmin == true){
    return "ผู้ดูแลระบบ";
  } else if (checkDoctor == true){
    return "แพทย์";
  }
};
module.exports = { checkRole };
