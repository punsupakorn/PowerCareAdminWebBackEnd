const e = require("express");
const axios = require("axios");
const { app } = require("firebase-admin");
const { db, FieldValue } = require("../config/firebase_config");
const {
  ConfirmCancel,
  PushVdo,
  SummaryPostpone,
  client,
} = require("./../linepushmessage/linepushmessage");
const { status } = require("@grpc/grpc-js");

const displayShortThaiDate = (date) => {
  const result = new Date(date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
    // weekday: "short",
  });
  return result;
};

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

//line push message
// let Status = "รอพบแพทย์";
// client.pushMessage(uid.data.userId, PushVdo(userName, Initial_Symtoms, Date, Time, DoctorName, Status, meetingLink))
//   .then(() => {
//     console.log('done');
//   })
//   .catch((err) => {
//     // error handling
//     console.log("send message error: ", err);
//   });

const getAppointment = async (UserID) => {
  try {
    const appointmentRef = db.collection("Appointment");
    const snapshot = await appointmentRef.where("UserID", "==", UserID).get();
    const arr = [];
    snapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    return arr;
  } catch (error) {
    console.log(error);
  }
};

const getAppointmentWithAppointmentID = async (appointmentid) => {
  try {
    const appointmentRef = db.collection("Appointment").doc(appointmentid);
    const doc = await appointmentRef.get();
    if (doc.exists) {
      return doc.data();
    } else {
      return false;
    }
    // const arr = [];
    // snapshot.forEach((doc) => {
    //   arr.push(doc.data());
    // });
    // return arr;
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

const getWorkingDoctor = async (DoctorID) => {
  const WorkingArr = [];
  const appointmentRef = db.collection("Appointment");
  const query = await appointmentRef.where("DoctorID", "==", DoctorID).get();
  query.forEach((data) => {
    WorkingArr.push(data.data());
  });
  return WorkingArr;
};

///// update appointment /////
const editAppointment = async (
  AppointmentID,
  OldTimeTableID,
  NewTimeTableID,
  Date,
  OldTime,
  NewTime,
  olddate,
  userID
) => {
  const appointmentRef = db.collection("Appointment").doc(AppointmentID);
  const oldtimetableRef = db.collection("TimeTable").doc(OldTimeTableID);
  const newtimetableRef = db.collection("TimeTable").doc(NewTimeTableID);
  const userRef = db.collection("User").doc(userID);
  const userdoc = await userRef.get();
  const appointmentdoc = await appointmentRef.get();
  const appointment = appointmentdoc.data();
  const user = userdoc.data();
  const lineid = user.LineUserId;
  const thainewdate = displayShortThaiDate(Date);
  const thaiolddate = displayShortThaiDate(olddate);

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
    client.pushMessage(
      lineid,
      SummaryPostpone(
        appointment.UserName,
        appointment.Initial_Symptoms,
        thainewdate,
        thaiolddate,
        OldTime,
        NewTime,
        appointment.DoctorName,
        appointment.Status
      )
    );
    return true;
  } catch (error) {
    return error;
  }
};

///// delete appointment /////
const deleteAppointment = async (AppointmentID, TimeTableID, Time) => {
  let status = "ยกเลิกนัดสำเร็จ";
  const appointmentRef = db.collection("Appointment").doc(AppointmentID);
  const doc = await appointmentRef.get();
  const appointment = doc.data();
  try {
    const timtableRef = db.collection("TimeTable").doc(TimeTableID);
    await db.collection("Appointment").doc(AppointmentID).delete();

    await timtableRef.update({ Time: FieldValue.arrayUnion(Time) });
    client
      .pushMessage(
        appointment.LineUserId,
        ConfirmCancel(
          appointment.UserName,
          appointment.Initial_Symptoms,
          appointment.Date,
          appointment.Time,
          appointment.DoctorName,
          status
        )
      )
      .then(() => {
        console.log("done");
      })
      .catch((err) => {
        // error handling
        console.log("send message error: ", err);
      });
    return true;
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
  getWorkingDoctor,
  getAppointmentWithAppointmentID,
};
