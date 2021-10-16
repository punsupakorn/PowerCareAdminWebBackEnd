const {
  getDoctorProfile,
  getStaffProfile,
} = require("../models/OfficerModels");

const confirmAddOfficer = (Position, DocumentID) => {
  try {
    if (Position == "เจ้าหน้าที่") {
      getStaffProfile(DocumentID);
    } else if (Position == "แพทย์") {
      getDoctorProfile(DocumentID);
    }
  } catch (error) {
    return error;
  }
};

module.exports = { confirmAddOfficer };
