// const express = require("express");
// const { json } = require("express");
const express = require("express");
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
    console.log(error);
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
const getProfile = async (DocumentID) => {
  try {
    const staffRef = db.collection("Staff").doc(DocumentID);
    const adminRef = db.collection("Admin").doc(DocumentID);
    const doctorRef = db.collection("Doctor").doc(DocumentID);
    const docStaff = await staffRef.get();
    const docDoctor = await doctorRef.get();
    const docAdmin = await adminRef.get();

    if (docStaff.exists) {
      return docStaff.data();
    } else if (docAdmin.exists) {
      return docAdmin.data();
    } else if (docDoctor.exists) {
      return docDoctor.data();
    } else {
      return false;
    }
  } catch (error) {}
};

const getStaffProfile = async (DocumentID) => {
  try {
    const staffRef = db.collection("Staff").doc(DocumentID);
    const doc = await staffRef.get();
    if (!doc.exists) {
      // console.log("No such document!");
      return false;
    } else {
      // console.log("Document data:", doc.data());
      return doc.data();
    }
  } catch (error) {}
};

const getDoctorProfile = async (DocumentID) => {
  try {
    const doctorRef = db.collection("Doctor").doc(DocumentID);
    const doc = await doctorRef.get();
    if (!doc.exists) {
      // console.log("No such document!");
      return false;
    } else {
      // console.log("Document data:", doc.data());
      return doc.data();
    }
  } catch (error) {}
};

const getAdminProfile = async (DocumentID) => {
  try {
    const adminRef = db.collection("Admin").doc(DocumentID);
    const doc = await adminRef.get();
    if (!doc.exists) {
      // console.log("No such document!");
      return false;
    } else {
      // console.log("Document data:", doc.data());
      return doc.data();
    }
  } catch (error) {}
};

const getAllOfficer = async () => {
  try {
    const doctor = db.collection("Doctor");
    const staff = db.collection("Staff");
    const admin = db.collection("Admin");
    const snapshotdoctor = await doctor.get();
    const snapshotstaff = await staff.get();
    const snapshotadmin = await admin.get();
    const arr = [];
    snapshotdoctor.forEach((doc) => {
      arr.push(doc.data());
    });
    snapshotstaff.forEach((doc) => {
      arr.push(doc.data());
    });
    snapshotadmin.forEach((doc) => {
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

const isStaff = async (Email) => {
  const staffRef = db.collection("Staff");
  const snapshot = await staffRef.where("Email", "==", Email).get();
  // var returnArr = [];
  // snapshot.forEach((doc) => {
  //   returnArr.push(doc.data());
  // });
  if (snapshot.empty) {
    return false;
  } else {
    return true;
  }
  // if (returnArr[0].Password == Password) {
  //   console.log(true);
  //   return true;
  // } else
};

const isDoctor = async (Email) => {
  const docotrRef = db.collection("Doctor");
  const snapshot = await docotrRef.where("Email", "==", Email).get();
  if (snapshot.empty) {
    return false;
  } else {
    return true;
  }
  // var returnArr = [];
  // snapshot.forEach((doc) => {
  //   returnArr.push(doc.data());
  // });

  // if (returnArr[0].Password == Password) {
  //   console.log(true);
  //   return true;
  // } else
};

const isAdmin = async (Email) => {
  const adminRef = db.collection("Admin");
  const snapshot = await adminRef.where("Email", "==", Email).get();
  // var returnArr = [];
  // snapshot.forEach((doc) => {
  //   returnArr.push(doc.data());
  // });
  if (snapshot.empty) {
    return false;
  } else {
    return true;
  }
  // if (returnArr[0].Password == Password) {
  //   console.log(true);
  //   return true;
  // } else {
};

const checkEmailExist = async (Email) => {
  try {
    const staffRef = db.collection("Staff");
    const doctorRef = db.collection("Doctor");
    const adminRef = db.collection("Admin");
    const snapshotstaff = await staffRef.where("Email", "==", Email).get();
    const snapshotAdmin = await adminRef.where("Email", "==", Email).get();
    const snapshotDoctor = await doctorRef.where("Email", "==", Email).get();
    if (!snapshotstaff.empty) {
      return false;
    } else if (!snapshotAdmin.empty) {
      return false;
    } else if (!snapshotDoctor.empty) {
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const checkOldPassword = async (Position, DocumentID, Password) => {
  const adminRef = db.collection("Admin").doc(DocumentID);
  const staffRef = db.collection("Staff").doc(DocumentID);
  const doctorRef = db.collection("Doctor").doc(DocumentID);
  if (Position == "ผู้ดูแลระบบ") {
    const docAdmin = await adminRef.get();
    const admin = docAdmin.data();
    if (Password == admin.Password) {
      return true;
    } else {
      return false;
    }
  } else if (Position == "แพทย์") {
    const docDoctor = await doctorRef.get();
    const doctor = docDoctor.data();
    if (Password == doctor.Password) {
      return true;
    } else {
      return false;
    }
  } else if (Position == "เจ้าหน้าที่") {
    const docStaff = await staffRef.get();
    const staff = docStaff.data();
    if (Password == staff.Password) {
      return true;
    } else {
      return false;
    }
  }
};

/////========== Update ==========/////
const updateStaff = async (
  DocumentID,
  FirstName,
  LastName,
  Phone,
  Password
  // Position
) => {
  try {
    await db.collection("Staff").doc(DocumentID).update({
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Password: Password,
    });

    await auth.updateUser(DocumentID, {
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
  Password
  // Position
) => {
  try {
    await db.collection("Doctor").doc(DocumentID).update({
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Password: Password,
    });
    await auth.updateUser(DocumentID, {
      password: Password,
      displayName: FirstName,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

const updateAdmin = async (
  DocumentID,
  FirstName,
  LastName,
  Phone,
  Password
  // Position
) => {
  try {
    await db.collection("Admin").doc(DocumentID).update({
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Password: Password,
    });
    await auth.updateUser(DocumentID, {
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
    return error;
  }
};

const deleteStaff = async (DocumentID) => {
  try {
    db.collection("Staff").doc(DocumentID).delete();
    auth.deleteUser(DocumentID);
  } catch (error) {
    console.log(error);
    return error;
  }
};

const deleteAdmin = async (DocumentID) => {
  try {
    db.collection("Admin").doc(DocumentID).delete();
    auth.deleteUser(DocumentID);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  addAdmin,
  addDoctor,
  addStaff,
  getAllOfficer,
  getStaffProfile,
  getDoctorProfile,
  getAdminProfile,
  getProfile,
  getDoctor,
  updateDoctor,
  updateAdmin,
  updateStaff,
  deleteDoctor,
  deleteStaff,
  deleteAdmin,
  isStaff,
  isAdmin,
  isDoctor,
  checkEmailExist,
  checkOldPassword,
  // emailAdminExist,
  // emailDocotrExist,
  // emailStaffExist,
};
