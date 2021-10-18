const {
  updateStaff,
  updateDoctor,
  getStaffProfile,
  getDoctorProfile,
} = require("../models/OfficerModels");

const getOfficerProfile = async (position, documentid) => {
  try {
    if (position == "เจ้าหน้าที่") {
      const data = await getStaffProfile(documentid);
      // const profile = {
      //   DocumentID: data.DocumentID,
      //   FirstName: data.FirstName,
      //   LastName: data.LastName,
      //   Position: data.Position,
      //   Phone: data.Phone,
      //   Password: data.Password,
      //   Email: data.Email,
      // };
      // console.log(profile);
      // return profile;
      return data;
    } else if (position == "แพทย์") {
      const data = await getDoctorProfile(documentid);
      // const profile = {
      //   DocumentID: data.DocumentID,
      //   FirstName: data.FirstName,
      //   LastName: data.LastName,
      //   Position: data.Position,
      //   Phone: data.Phone,
      //   Password: data.Password,
      //   Email: data.Email,
      // };
      // console.log(profile);
      // return profile;
      return data;
    }
  } catch (error) {
    return error;
  }
};

const editOfficer = async (
  DocumentID,
  FirstName,
  LastName,
  Phone,
  Email,
  Password
) => {
  try {
    if (Position == "เจ้าหน้าที่") {
      updateStaff(DocumentID, FirstName, LastName, Phone, Email, Password).then(
        res.status(200).send("Edit Staff Scuccess !")
      );
    } else if (Position == "แพทย์") {
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

module.exports = {
  editOfficer,
  getOfficerProfile,
};
