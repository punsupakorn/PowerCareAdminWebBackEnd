const {
  getAllOfficer,
  deleteDoctor,
  deleteStaff,
  getStaffProfile,
  getDoctorProfile,
} = require("../models/OfficerModels");

const deleteOfficer = async (req, res) => {
  const DocumentID = req.body.DocumentID;
  const Position = req.body.Position;
  try {
    if (Position == "Doctor") {
      deleteDoctor(DocumentID);
      res.status(200);
      //res.json({result:"delete doctor success!"})
      console.log("delete doctor success!");
    } else if (Position == "Admin") {
      deleteAdmin(DocumentID);
      res.status(200);
      //res.json({result:"delete admin success!"})
      console.log("delete admin success!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOfficerProfile = async (DocumentID, Position) => {
  try {
    if (Position == "Admin") {
      await getAdminProfile(DocumentID);
    } else if (Position == "Doctor") {
      await getDoctorProfile(DocumentID);
    }
  } catch (error) {
    return error;
  }
};

module.exports = { getAllOfficer, deleteOfficer, getOfficerProfile };
