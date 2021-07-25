const {
  getAllOfficer,
  deleteDoctor,
  deleteAdmin,
} = require("../models/OfficerModels");

const deleteOfficer = async (req, res) => {
  const document = req.body.document;
  const position = req.body.position;
  try {
    if (position == "Doctor") {
      deleteDoctor(document);
      res.status(200);
      console.log("delete doctor success!");
    } else if (position == "Admin") {
      deleteAdmin(document);
      res.status(200);
      console.log("delete admin success!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllOfficer, deleteOfficer };
