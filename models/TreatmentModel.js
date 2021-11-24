const { app } = require("firebase-admin");
const { db } = require("../config/firebase_config");

const addTreatment = async (
  AppointmentID,
  Description,
  MedicineQuantity,
  // PaymentStatus,
  TotalPrice,
  UserID,
  OtherService
) => {
  const treatmentRef = db.collection("Treatment").doc();
  try {
    await db.collection("Treatment").doc(treatmentRef.id).set({
      TreatmentID: treatmentRef.id,
      AppointmentID: AppointmentID,
      Description: Description,
      MedicineQuantity: MedicineQuantity,
      // PaymentStatus: PaymentStatus,
      TotalPrice: TotalPrice,
      UserID: UserID,
      OtherService: OtherService,
    });
    const data = {
      TreatmentID: treatmentRef.id,
      AppointmentID: AppointmentID,
      Description: Description,
      MedicineQuantity: MedicineQuantity,
      TotalPrice: TotalPrice,
      UserID: UserID,
      OtherService: OtherService,
    };
    return data;
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
