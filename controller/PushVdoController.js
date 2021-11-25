const {
  getAppointmentWithAppointmentID,
} = require("../models/AppointmentModel");
const { db, FieldValue } = require("../config/firebase_config");
const { getUser } = require("../models/UserModel");
const {
  client,
  confirmAppointment,
} = require("../linepushmessage/linepushmessage");

const pushMessage = async (userId, appointmentId, meetingLink) => {
  try {
    const user = getUser(userId);
    const lineuserid = user.LineUserId;
    const appointmentRef = db.collection("Appointment").doc(appointmentId);
    await appointmentRef.update({
      Status: "รอพบแพทย์",
      MeetingLink: meetingLink,
    });
    client
      .pushMessage(lineuserid, confirmAppointment())
      .then(() => {
        console.log("done");
      })
      .catch((err) => {
        // error handling
        console.log("send message error: ", err);
      });
  } catch (error) {
    return false;
  }
};

module.exports = { getAppointmentWithAppointmentID, getUser, pushMessage };
