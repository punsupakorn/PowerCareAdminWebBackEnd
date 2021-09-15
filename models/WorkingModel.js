const { db } = require("../config/firebase_config");

///// get appointment /////
const getAppointment = async () => {
  try {
    const appointment = await db.collection("Appointment");
    const snapshot = await appointment.get();
    const arr = [];
    snapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    return arr;
  } catch (error) {
    console.log(error);
  }
};

///// delete appointment /////
const deleteAppointment = async (DocumentID) => {
  try {
    db.collection("Appointment").doc(DocumentID).delete();
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getAppointment,deleteAppointment };
