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
    if (Position == "แพทย์") {
      deleteDoctor(DocumentID);
      res.status(200);
      //res.json({result:"delete doctor success!"})
      console.log("delete doctor success!");
    } else if (Position == "เจ้าหน้าที่") {
      deleteStaff(DocumentID);
      res.status(200);
      //res.json({result:"delete admin success!"})
      console.log("delete staff success!");
    }
  } catch (error) {
    res.status(500).json(error);
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
