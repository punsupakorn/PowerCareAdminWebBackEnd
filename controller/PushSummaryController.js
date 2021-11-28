const { app } = require("firebase-admin");
const { db, FieldValue } = require("../config/firebase_config");
const { client, Treatment } = require("../linepushmessage/linepushmessage");
const displayShortThaiDate = (date) => {
  const result = new Date(date).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
    // weekday: "short",
  });
  return result;
};

const pushSummary = async (
  treatmentid,
  appointmentid,
  medicinequantity,
  otherserviceprice,
  otherservicedesc,
  totalprice,
  date,
  time
) => {
  const appointmentRef = db.collection("Appointment").doc(appointmentid);
  const doc = await appointmentRef.get();
  const data = doc.data();
  const lineid = data.LineUserId;
  const thaidate = displayShortThaiDate(date);
  // console.log(medicinequantity);
  await client
    .pushMessage(
      lineid,
      Treatment(
        thaidate,
        time,
        medicinequantity,
        otherserviceprice,
        totalprice
      )
    )
    .then(() => {
      console.log("done");
    })
    .catch((err) => {
      console.log("send message error: ", err);
    });
};

module.exports = { pushSummary };
