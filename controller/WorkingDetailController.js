// const { getWorkingDetail } = require("../models/AppointmentModel");
const { getUser } = require("../models/UserModel");
const { getTreatmentWithAppointmentID } = require("../models/TreatmentModel");

module.exports = { getUser, getTreatmentWithAppointmentID };
