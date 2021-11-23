const {
  getAllAppointment,
  deleteAppointment,
} = require("../models/AppointmentModel");
const {getDoctorProfile} = require("../models/OfficerModels");

module.exports = { getAllAppointment, deleteAppointment,getDoctorProfile };
