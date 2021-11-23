const { db } = require("../config/firebase_config");

const addTreatment = async (
  AppointmentID,
  Description,
  MedicineQuantity,
  PaymentStatus,
  TotalPrice,
  UserID
) => {
  const treatmentRef = db.collection("Treatment").doc();
  try {
    await db.collection("Treatment").doc(treatmentRef.id).set({
      TreatmentID: treatmentRef.id,
      AppointmentID: AppointmentID,
      Description: Description,
      MedicineQuantity: MedicineQuantity,
      PaymentStatus: PaymentStatus,
      TotalPrice: TotalPrice,
      UserID: UserID,
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = { addTreatment };
