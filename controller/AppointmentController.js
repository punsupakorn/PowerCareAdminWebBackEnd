const {
  addTimeTable,
  checkTimeTableExist,
} = require("../models/ScheduleModels");

const addDoctorAppointment = async (doctor, date, time, id) => {
  try {
    let data = checkTimeTableExist(id, date);
    console.log(data);
    return data;
    // for (let i = 0; i < date.length; i++) {
    //   const element = date[i];
    //   await addTimeTable(doctor, element, time, id);
    // }
  } catch (error) {
    return error;
  }
};

module.exports = { addDoctorAppointment, checkTimeTableExist };
