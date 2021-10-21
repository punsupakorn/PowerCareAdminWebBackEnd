const {
  getAllOfficer,
  deleteDoctor,
  deleteStaff,
  deleteAdmin,
  getStaffProfile,
  getDoctorProfile,
} = require("../models/OfficerModels");

const deleteOfficer = async (Position, DocumentID) => {
  try {
    if (Position == "แพทย์") {
      deleteDoctor(DocumentID);
      return true;
    } else if (Position == "เจ้าหน้าที่") {
      deleteStaff(DocumentID);
      return true;
    } else if (Position == "ผู้ดูแลระบบ") {
      deleteAdmin(DocumentID);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

const getOfficerProfile = async (DocumentID, Position) => {
  try {
    if (Position == "เจ้าหน้าที่") {
      await getStaffProfile(DocumentID);
    } else if (Position == "แพทย์") {
      await getDoctorProfile(DocumentID);
    }
  } catch (error) {
    return error;
  }
};

module.exports = { getAllOfficer, deleteOfficer, getOfficerProfile };
