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
    let result1 = await auth.createUser({
      email: Email,
      password: Password,
      displayName: FirstName,
      uid: docAdminRef.id,
    });

    let result2 = await db.collection("Admin").doc(docAdminRef.id).set({
      DocumentID: docAdminRef.id,
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Position: Position,
      Email: Email,
      Password: Password,
    });
    console.log("result1 : "+result1)
    console.log("result2 : "+result2)
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
    const docDoctorRef = await db.collection("Admin").doc();
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

/////========== Read ==========/////
const getAllOfficer = async () => {
  try {
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
const updateDoctor = async (
  DocumentID,
  FirstName,
  LastName,
  Phone,
  Position,
  Email,
  Password
) => {
  try {
    const doctorRef = db.collection("Doctor").doc(DocumentID);
    await doctorRef.update({
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Position: Position,
      Email: Email,
      Password: Password,
    });
    auth.updateUser(DocumentID, {
      email: Email,
      password: Password,
      displayName: FirstName,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateAdmin = async (
  DocumentID,
  FirstName,
  LastName,
  Phone,
  Position,
  Email,
  Password
) => {
  try {
    const doctorRef = db.collection("Admin").doc(DocumentID);
    await doctorRef.update({
      FirstName: FirstName,
      LastName: LastName,
      Phone: Phone,
      Position: Position,
      Email: Email,
      Password: Password,
    });
    auth.updateUser(DocumentID, {
      email: Email,
      password: Password,
      displayName: FirstName,
    });
  } catch (error) {
    console.log(error);
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

const deleteAdmin = async (DocumentID) => {
  try {
    db.collection("Admin").doc(DocumentID).delete();
    auth.deleteUser(DocumentID);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addAdmin,
  addDoctor,
  getAllOfficer,
  getDoctor,
  updateDoctor,
  updateAdmin,
  deleteDoctor,
  deleteAdmin,
};
