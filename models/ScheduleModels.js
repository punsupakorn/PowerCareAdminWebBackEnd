const { db, FieldValue } = require("../config/firebase_config");

/////========== Create ==========/////
const addTimeTable = async (doctor, element, time, id) => {
  const resultDate = new Date(element).toLocaleDateString();
  const timetable = await db.collection("TimeTable").doc();
  await db.collection("TimeTable").doc(timetable.id).set({
    TimeTableID: timetable.id,
    DoctorName: doctor,
    Date: resultDate,
    Time: time,
    DoctorID: id,
  });
};

const checkTimeTableExist = async (DoctorID, Date) => {
  try {
    const DateArr = [];
    const timetableRef = db.collection("TimeTable");
    const query = await timetableRef.where("Date", "==", Date).get();
    query.forEach((doc) => {
      DateArr.push(doc.data());
    });

    // const data = Object.values(DateArr).some((doc) => doc.DoctorID == DoctorID);
    // console.log(data);
  } catch (error) {
    return error;
  }
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
// const updateAppointment = async (TimeTableID) => {
//   db.collection("TimeTable").doc(TimeTableID).update({});
// };

/////========== Delete ==========/////
const deleteTimeTable = async (TimeTableID) => {
  try {
    await db.collection("TimeTable").doc(TimeTableID).delete();
  } catch (error) {
    console.log(error);
    return error;
  }
};
const deleteTimeSlot = (TimeTableID, Time) => {
  try {
    const timeTableRef = db.collection("TimeTable").doc(TimeTableID);
    timeTableRef.update({
      Time: FieldValue.arrayRemove(Time),
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllTimeTable,
  addTimeTable,
  deleteTimeTable,
  deleteTimeSlot,
  checkTimeTableExist,
};
