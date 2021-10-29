const e = require("express");
const {
  updateStaff,
  updateDoctor,
  updateAdmin,
  getStaffProfile,
  getDoctorProfile,
  getAdminProfile,
  checkOldPassword,
} = require("../models/OfficerModels");

const getOfficerProfile = async (position, documentid) => {
  try {
    if (position == "เจ้าหน้าที่") {
      const data = await getStaffProfile(documentid);
      return data;
    } else if (position == "แพทย์") {
      const data = await getDoctorProfile(documentid);
      return data;
    } else if (position == "ผู้ดูแลระบบ") {
      const data = await getAdminProfile(documentid);
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
  Password,
  Position
) => {
  try {
    if (Position == "เจ้าหน้าที่") {
      await updateStaff(
        DocumentID,
        FirstName,
        LastName,
        Phone,
        Password,
        Position
      );
      return true;
      // .then(
      //   res.status(200).send("Edit Staff Scuccess !")
      // );
    } else if (Position == "แพทย์") {
      await updateDoctor(
        DocumentID,
        FirstName,
        LastName,
        Phone,
        Password,
        Position
      );
      return true;
      // .then(
      //   res.status(200).send("Edit Doctor Scuccess !")
      // );
    } else if (Position == "ผู้ดูแลระบบ") {
      await updateAdmin(
        DocumentID,
        FirstName,
        LastName,
        Phone,
        Password,
        Position
      );
      return true;
      // .then(
      //   res.status(200).send("Edit Admin Success !")
      // );
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  editOfficer,
  getOfficerProfile,
  checkOldPassword,
};
