const { db } = require("../config/firebase_config");

///// create /////
const addMedicine = async (Name, Description, Price, Type, Stock) => {
  const medicineRef = db.collection("Medicine").doc();
  try {
    await db.collection("Medicine").doc(medicineRef.id).set({
      MedicineID: medicineRef.id,
      MedicineName: Name,
      MedicineDescription: Description,
      Price: Price,
      Type: Type,
      Stock: Stock,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

///// read /////

///// update /////

///// delete /////

module.exports = { addMedicine };
