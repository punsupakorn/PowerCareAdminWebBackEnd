const {
  getAppointmentWithAppointmentID,
} = require("../models/AppointmentModel");
const { db, FieldValue } = require("../config/firebase_config");
const { getUser } = require("../models/UserModel");
const { client, PushVdo } = require("../linepushmessage/linepushmessage");

const pushMessage = async (userId, appointmentId, meetingLink) => {
  try {
    const arr = [];
    const user = await getUser(userId);
    const lineuserid = user.LineUserId;
    const appointmentRef = db.collection("Appointment").doc(appointmentId);
    const doc = await appointmentRef.get();
    if (doc.exists) {
      arr.push(doc.data());
    }
    const result = arr[0];
    await appointmentRef.update({
      Status: "รอพบแพทย์",
      MeetingLink: meetingLink,
    });
    client
      .pushMessage(
        lineuserid,
        PushVdo(
          result.UserName,
          result.Initial_Symptoms,
          result.Date,
          result.Time,
          result.DoctorName,
          result.Status,
          meetingLink
        )
      )
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
