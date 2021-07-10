const db = require("../config/firebase_config");

/////========== Create ==========/////
const addAdmin = async (
  FirstName,
  LastName,
  Phone,
  Position,
  Email,
  Password
) => {
  const docAdminRef = await db.collection("Admin").doc();

  await db.collection("Admin").doc(docAdminRef.id).set({
    DocumentID: docAdminRef.id,
    FirstName: FirstName,
    LastName: LastName,
    Phone: Phone,
    Position: Position,
    Email: Email,
    Password: Password,
  });
};

const addDoctor = async (
  FirstName,
  LastName,
  Phone,
  Position,
  Email,
  Password
) => {
  const docDoctorRef = await db.collection("Admin").doc();

  await db.collection("Doctor").doc(docDoctorRef.id).set({
    DocumentID: docDoctorRef.id,
    FirstName: FirstName,
    LastName: LastName,
    Phone: Phone,
    Position: Position,
    Email: Email,
    Password: Password,
  });
};

/////========== Read ==========/////
const getAllOfficer = async () => {
  const doctor = await db.collection("Doctor");
  const admin = await db.collection("Admin");
  const snapshotdoctor = await doctor.get();
  const snapshotadmin = await admin.get();
  const arr = [];
  snapshotdoctor.forEach((doc) => {
    arr.push(doc.data());
  });
  snapshotadmin.forEach((doc) => {
    arr.push(doc.data());
  });
  return arr;
};

const getDoctor = async () => {
  const doctorRef = db.collection("Doctor");
  const snapshot = await doctorRef.get();
  const arr = [];
  snapshot.forEach((doc) => {
    arr.push(doc.data());
    //console.log(doc.data());
  });
  // console.log(arr)
  return arr;
};

/////========== Update ==========/////

/////========== Delete ==========/////

module.exports = {
  addAdmin,
  addDoctor,
  getAllOfficer,
  getDoctor,
};
