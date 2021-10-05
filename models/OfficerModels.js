// const express = require("express");
// const { json } = require("express");
const { db, auth } = require("../config/firebase_config");

/////========== Create ==========/////
const addAdmin = async (
  FirstName,
  LastName,
  Phone,
  Position,
  Email,
  Password
) => {
  const docAdminRef = db.collection("Admin").doc();
  try {
    await auth.createUser({
      email: Email,
      password: Password,
      displayName: FirstName,
      uid: docAdminRef.id,
    });

    await db.collection("Admin").doc(docAdminRef.id).set({
      DocumentID: docAdminRef.id,
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Position: Position,
      Email: Email,
      Password: Password,
    });
  } catch (error) {
    // console.log(error);
    return error;
  }
};

const addDoctor = async (
  FirstName,
  LastName,
  Phone,
  Position,
  Email,
  Password
) => {
  try {
    const docDoctorRef = await db.collection("Doctor").doc();
    await auth.createUser({
      email: Email,
      password: Password,
      displayName: FirstName,
      uid: docDoctorRef.id,
    });

    await db.collection("Doctor").doc(docDoctorRef.id).set({
      DocumentID: docDoctorRef.id,
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Position: Position,
      Email: Email,
      Password: Password,
    });
  } catch (error) {
    console.log(error);
  }
};

const addStaff = async (
  FirstName,
  LastName,
  Phone,
  Position,
  Email,
  Password
) => {
  const docStaffRef = db.collection("Staff").doc();
  try {
    await auth.createUser({
      email: Email,
      password: Password,
      displayName: FirstName,
      uid: docStaffRef.id,
    });

    await db.collection("Staff").doc(docStaffRef.id).set({
      DocumentID: docStaffRef.id,
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Position: Position,
      Email: Email,
      Password: Password,
    });
  } catch (error) {
    return error;
  }
};

/////========== Read ==========/////
const getStaffProfile = async (DocumentID) => {
  try {
    let data = await db.collection("Staff").doc(DocumentID).get();
    // console.log(data.data());
    const result = data.data();
    return result;
  } catch (error) {
    return error;
  }
};

const getDoctorProfile = async (DocumentID) => {
  try {
    let data = await db.collection("Doctor").doc(DocumentID).get();
    // console.log(data.data());
    const result = data.data();
    return result;
  } catch (error) {
    return error;
  }
};

const getAllOfficer = async () => {
  try {
    const doctor = db.collection("Doctor");
    const staff = db.collection("Staff");
    const snapshotdoctor = await doctor.get();
    const snapshotstaff = await staff.get();
    const arr = [];
    snapshotdoctor.forEach((doc) => {
      arr.push(doc.data());
    });
    snapshotstaff.forEach((doc) => {
      arr.push(doc.data());
    });
    return arr;
  } catch (error) {
    console.log(error);
  }
};

const getDoctor = async () => {
  try {
    const doctorRef = db.collection("Doctor");
    const snapshot = await doctorRef.get();
    const arr = [];
    snapshot.forEach((doc) => {
      arr.push(doc.data());
      //console.log(doc.data());
    });
    // console.log(arr)
    return arr;
  } catch (error) {
    console.log(error);
  }
};

/////========== Update ==========/////
const updateStaff = async (
  DocumentID,
  FirstName,
  LastName,
  Phone,
  Email,
  Password
) => {
  try {
    await db.collection("Staff").doc(DocumentID).update({
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Email: Email,
      Password: Password,
    });

    await auth.updateUser(DocumentID, {
      email: Email,
      password: Password,
      displayName: FirstName,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateDoctor = async (
  DocumentID,
  FirstName,
  LastName,
  Phone,
  Email,
  Password
) => {
  try {
    await db.collection("Doctor").doc(DocumentID).update({
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Email: Email,
      Password: Password,
    });
    await auth.updateUser(DocumentID, {
      email: Email,
      password: Password,
      displayName: FirstName,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

/////========== Delete ==========/////
const deleteDoctor = async (DocumentID) => {
  try {
    db.collection("Doctor").doc(DocumentID).delete();
    auth.deleteUser(DocumentID);
  } catch (error) {
    console.log(error);
  }
};

const deleteStaff = async (DocumentID) => {
  try {
    db.collection("Staff").doc(DocumentID).delete();
    auth.deleteUser(DocumentID);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addAdmin,
  addDoctor,
  addStaff,
  getAllOfficer,
  getStaffProfile,
  getDoctorProfile,
  getDoctor,
  updateDoctor,
  updateStaff,
  deleteDoctor,
  deleteStaff,
};
