const { db, FieldValue } = require("../config/firebase_config");

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

const getWorkingDetail = async (AppointmentID, UserID) => {
  try {
    const appointmentRef = db.collection("Appointment").doc(AppointmentID);
    const userRef = db.collection("User").doc(UserID);
    const docAppointment = await appointmentRef.get();
    const docUser = await userRef.get();
    if (!docAppointment.exists) {
      return false;
    }
    if (!docUser.exists) {
      return false;
    }
    return JSON.stringify({
      appointment: docAppointment.data(),
      user: docUser.data(),
    });
  } catch (error) {
    return error;
  }
};

const getDateChange = async (DoctorID) => {
  try {
    const DateArr = [];
    const timetableRef = db.collection("TimeTable");
    const query = await timetableRef.where("DoctorID", "==", DoctorID).get();

    query.forEach((doc) => {
      const data = doc.data();
      const date = data.Date;
      const id = data.TimeTableID;
      DateArr.sort().push({ Date: date, TimeTableID: id });
    });

    const filter = [...new Set(DateArr)];
    return filter;
  } catch (error) {
    return error;
  }
};

const getTime = async (TimeTableID) => {
  try {
    // const TimeArr = [];
    const timetableRef = db.collection("TimeTable").doc(TimeTableID);
    const doc = await timetableRef.get();
    const data = doc.data();
    const time = data.Time;
    return time.sort();
  } catch (error) {
    return error;
  }
};

///// update appointment /////
const editAppointment = async (
  AppointmentID,
  OldTimeTableID,
  NewTimeTableID,
  Date,
  OldTime,
  NewTime
) => {
  const appointmentRef = db.collection("Appointment").doc(AppointmentID);
  const oldtimetableRef = db.collection("TimeTable").doc(OldTimeTableID);
  const newtimetableRef = db.collection("TimeTable").doc(NewTimeTableID);
  try {
    await appointmentRef.update({
      Time: NewTime,
      Date: Date,
      TimeTableID: NewTimeTableID,
    });

    await newtimetableRef.update({
      Time: FieldValue.arrayRemove(NewTime),
    });

    await oldtimetableRef.update({ Time: FieldValue.arrayUnion(OldTime) });
  } catch (error) {
    return error;
  }
};

///// delete appointment /////
const deleteAppointment = async (AppointmentID, TimeTableID, Time) => {
  try {
    await db.collection("Appointment").doc(AppointmentID).delete();
    const timtableRef = db.collection("TimeTable").doc(TimeTableID);
    await timtableRef.update({ Time: FieldValue.arrayUnion(Time) });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAppointment,
  getAllAppointment,
  deleteAppointment,
  getWorkingDetail,
  editAppointment,
  getDateChange,
  getTime,
};
