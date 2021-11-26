const {
  addMedicine,
  getMedicine,
  deleteMedicine,
  updateMedicine
} = require("../models/MedicineModel");

const createMedicine = async (Name, Description, Price, Type) => {
  try {
    await addMedicine(Name, Description, Price, Type);
    // res.status(200).send("added Medicine !");
  } catch (error) {
    // res.status(500).json(error);
  }
};

const removeMedicine = async (req, res) => {
  try {
    const MedicineID = req.body.MedicineID;
    await deleteMedicine(MedicineID);
    res.status(200).send("Deleted Medicine !");
  } catch (error) {}
};

module.exports = { getMedicine, createMedicine, removeMedicine, updateMedicine };
