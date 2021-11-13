const {
  addTimeTable,
  checkTimeTableExist,
} = require("../models/ScheduleModels");

const addDoctorAppointment = async (doctor, date, time, id) => {
  try {
    for (let i = 0; i < date.length; i++) {
      const element = date[i];
      const exist = await checkTimeTableExist(id, element);
      if (exist == false) {
        return "exist";
      } else {
        await addTimeTable(doctor, element, time, id);
      }
    }
  } catch (error) {
    return error;
  }
};

module.exports = { addDoctorAppointment };
