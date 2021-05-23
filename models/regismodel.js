const db = require("../config/firebase_config");

const addAdminRegisDetail = async (
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

const addDoctorRegisDetail = async (
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

module.exports = { addAdminRegisDetail, addDoctorRegisDetail };
