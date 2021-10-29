const { getUser } = require("../models/UserModel");
const { getAppointment } = require("../models/AppointmentModel");

const userDetail = async (userID) => {
  try {
    let user = await getUser(userID);
    let appointment = await getAppointment(userID);
    return { user, appointment };
  } catch (error) {
    return error;
  }
};
module.exports = { userDetail };
