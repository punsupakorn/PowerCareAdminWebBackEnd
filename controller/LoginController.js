const { isStaff, isAdmin, isDoctor } = require("../models/OfficerModels");

const checkRole = async (Email) => {
  const checkStaff = await isStaff(Email);
  const checkAdmin = await isAdmin(Email);
  const checkDoctor = await isDoctor(Email);
  // console.log(checkStaff);
  if (checkStaff == true) {
    return "เจ้าหน้าที่";
  } else if (checkAdmin == true){
    return "ผู้ดูแลระบบ";
  } else if (checkDoctor == true){
    return "แพทย์";
  }
};
module.exports = { checkRole };
