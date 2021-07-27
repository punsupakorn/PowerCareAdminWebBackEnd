const db = require("../config/firebase_config");

/////========== Create ==========/////
const addTimeTable = async (doctor, date, time) => {
  const timetable = await db.collection("TimeTable").doc();
  await db.collection("TimeTable").doc(timetable.id).set({
    TimeTableID: timetable.id,
    DoctorName: doctor,
    Date: date,
    Time: time,
  });
};

/////========== Read ==========/////
const getAllTimeTable = async () => {
  const timetable = await db.collection("TimeTable");
  const snapshot = await timetable.get();
  const arr = [];
  snapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  return arr;
};

/////========== Update ==========/////
const updateAppointment = async (TimeTableID) => {
  db.collection("TimeTable").doc(TimeTableID).update({

  });
};

/////========== Delete ==========/////
const deleteAppointment = async (DocumentID) => {
  db.collection("TimeTable").doc(DocumentID).delete();
};

module.exports = {
  getAllTimeTable,
  addTimeTable,
  deleteAppointment,
  updateAppointment,
};
