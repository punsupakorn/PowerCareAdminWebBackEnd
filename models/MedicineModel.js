const { auth } = require("firebase-admin");
const { db } = require("../config/firebase_config");

///// create /////
const addMedicine = async (Name, Description, Price, Type) => {
  const medicineRef = db.collection("Medicine").doc();
  try {
    await db.collection("Medicine").doc(medicineRef.id).set({
      MedicineID: medicineRef.id,
      MedicineName: Name,
      MedicineDescription: Description,
      Price: Price,
      Type: Type,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

///// read /////
const getAllMedicine = async () => {
  try {
    const medicine = await db.collection("Medicine");
    const snapshot = await medicine.get();
    const arr = [];
    snapshot.forEach((doc) => {
      arr.push(doc.data());
    });
    return arr;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getMedicine = async (MedicineID) => {
  try {
    const medicineRef = db.collection("Medicine").doc(MedicineID);
    const doc = await medicineRef.get();
    if (!doc.exists) {
      // console.log("No such document!");
      return false;
    } else {
      // console.log("Document data:", doc.data());
      return doc.data();
    }
  } catch (error) {}
};

///// update /////

const updateMedicine = async (MedicineID, Name, Description, Price, Type) => {
  try {
    const medicineRef = db.collection("Medicine").doc(MedicineID);
    await medicineRef.update({
      MedicineName: Name,
      MedicineDescription: Description,
      Price: Price,
      Type: Type,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
///// delete /////
const deleteMedicine = (MedicineID) => {
  try {
    db.collection("Medicine").doc(MedicineID).delete();
  } catch (error) {}
};

module.exports = {
  addMedicine,
  getAllMedicine,
  getMedicine,
  deleteMedicine,
  updateMedicine,
};
