const { db } = require("../config/firebase_config");

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

module.exports = { getAppointment };
