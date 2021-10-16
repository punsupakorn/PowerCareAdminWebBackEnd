const { db } = require("../config/firebase_config");

const getDoctorProfile = async (DocumentID) => {
  try {
    const doctorRef = db.collection("Doctor").doc(DocumentID);
    const doc = await doctorRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
      return doc.data();
    }
  } catch (error) {}
};

module.exports = { getDoctorProfile };
