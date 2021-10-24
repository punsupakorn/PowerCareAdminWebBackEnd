const { db } = require("../config/firebase_config");

///// get appointment /////
const getAllAppointment = async () => {
  try {
    const appointment = db.collection("Appointment");
    const snapshot = await appointment.get();
    const arr = [];
    // const User = [];
    // const Doctor = [];
    snapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    // for (let i = 0; i < arr.length; i++) {
    //   const element = arr[i];
    //   const userRef = await db.collection("User").doc(element.UserID).get();
    //   User.push(userRef.data());
    //   const DoctorRef = await db
    //     .collection("Doctor")
    //     .doc(element.DoctorID)
    //     .get();
    //   Doctor.push(DoctorRef.data());
    // }
    // return { arr, User, Doctor };
    return arr;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAppointment = async (UserID) => {
  try {
    const appointmentRef = db.collection("Appointment");
    const snapshot = await appointmentRef.where("UserID", "==", UserID).get();
    const arr = [];
    snapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    // console.log("Appointment : ", arr);
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

module.exports = { getAppointment, getAllAppointment, deleteAppointment };
