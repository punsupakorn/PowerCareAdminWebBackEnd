const {
  updateStaff,
  updateDoctor,
  getStaffProfile,
  getDoctorProfile,
} = require("../models/OfficerModels");

const getOfficerProfile = async (Position,DocumentID) => {
  try {
    if (Position == "Staff") {
      await getStaffProfile(DocumentID);
    } else if (Position == "Doctor") {
      await getDoctorProfile(DocumentID);
    }
  } catch (error) {
    return error;
  }
};

const editOfficer = async (req, res) => {
  const DocumentID = req.body.DocumentID;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const Phone = req.body.Phone;
  const Position = req.body.Position;
  const Email = req.body.Email;
  const Password = req.body.Password;

  try {
    if (Position == "Staff") {
      updateStaff(DocumentID, FirstName, LastName, Phone, Email, Password).then(
        res.status(200).send("Edit Staff Scuccess !")
      );
    } else if (Position == "Doctor") {
      updateDoctor(
        DocumentID,
        FirstName,
        LastName,
        Phone,
        Email,
        Password
      ).then(res.status(200).send("Edit Doctor Scuccess !"));
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { editOfficer,getOfficerProfile};
