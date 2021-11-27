const { app } = require("firebase-admin");
const { db } = require("../config/firebase_config");

const addTreatment = async (
  AppointmentID,
  Description,
  MedicineQuantity,
  TotalPrice,
  UserID,
  OtherServiceDescription,
  OtherServicePrice
) => {
  const treatmentRef = db.collection("Treatment").doc();
  try {
    await db.collection("Treatment").doc(treatmentRef.id).set({
      TreatmentID: treatmentRef.id,
      AppointmentID: AppointmentID,
      Description: Description,
      MedicineQuantity: MedicineQuantity,
      TotalPrice: TotalPrice,
      UserID: UserID,
      OtherServiceDescription: OtherServiceDescription,
      OtherServicePrice: OtherServicePrice,
    });
    const data = {
      TreatmentID: treatmentRef.id,
      AppointmentID: AppointmentID,
      Description: Description,
      MedicineQuantity: MedicineQuantity,
      TotalPrice: TotalPrice,
      UserID: UserID,
      OtherServiceDescription: OtherServiceDescription,
      OtherServicePrice: OtherServicePrice,
    };

    const appointmentRef = db.collection("Appointment").doc(AppointmentID);
    appointmentRef.update({
      Status: "สำเร็จ",
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getTreatmentWithAppointmentID = async (appointmentid) => {
  try {
    const treatmentRef = db.collection("Treatment");
    const query = await treatmentRef
      .where("AppointmentID", "==", appointmentid)
      .get();
    const arr = [];
    query.forEach((doc) => {
      arr.push(doc.data());
    });
    return arr;
  } catch (error) {
    return error;
  }
};

module.exports = { addTreatment, getTreatmentWithAppointmentID };
