const {
  getAppointmentWithAppointmentID,
} = require("../models/AppointmentModel");

const { getUser } = require("../models/UserModel");

module.exports = { getAppointmentWithAppointmentID,getUser };
