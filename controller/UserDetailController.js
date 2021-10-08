const { getUser } = require("../models/UserModel");
const { getAppointment } = require("../models/AppointmentModel");

const getUserProfile = async (UserID) => {
  try {
    await getUser(UserID);
  } catch (error) {
    return error;
  }
};

const getUserAppointment = (UserID) => {
  try {
    getAppointment(UserID);
  } catch (error) {}
};
module.exports = { getUserProfile, getUserAppointment };
