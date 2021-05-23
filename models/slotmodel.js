const { response } = require("express");
const { doc } = require("../config/firebase_config");
const db = require("../config/firebase_config");
const { addAdminRegisDetail } = require("./regismodel");

const addTimeTable = async (doctor,date,time) => {
  const timetable = await db.collection("TimeTable").doc();
  await db.collection("TimeTable").doc(timetable.id).set({
    TimeTableID: timetable.id,
    DoctorName: doctor,
    Date: date,
    Time: time,
  });
};

const getAllDoctor = async () => {
  const doctorRef = db.collection('Doctor');
  const snapshot = await doctorRef.get();
  const arr = []
  snapshot.forEach(doc => {
    arr.push(doc.data())
    //console.log(doc.data());
  });
  // console.log(arr)
  return arr;
    
};

module.exports = { addTimeTable, getAllDoctor };
