const { getUser } = require("../models/UserModel");
const { getAppointment } = require("../models/AppointmentModel");

const getUserProfile = async (UserID) => {
  try {
    const data = await getUser(UserID);
    return data;
  } catch (error) {
    return error;
  }
};

const getUserAppointment = async (UserID) => {
  try {
    await getAppointment(UserID);
  } catch (error) {
    return error;
  }
};
module.exports = { getUserProfile, getUserAppointment };
