const { getUser } = require("../models/UserModel");
const { getDateChange, getTime } = require("../models/AppointmentModel");
module.exports = { getUser, getDateChange, getTime };
