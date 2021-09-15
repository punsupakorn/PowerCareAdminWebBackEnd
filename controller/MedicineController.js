const { addMedicine,getMedicine } = require("../models/MedicineModel");

const createMedicine = async (req, res) => {
  try {
    const Name = req.body.Name;
    const Description = req.body.Description;
    const Price = req.body.Price;
    const Type = req.body.Type;
    const Stock = req.body.Stock;
    await addMedicine(Name, Description, Price, Type, Stock);
    res.status(200).send("added Medicine !");
  } catch (error) {
    res.status(500).json(error);
  }
};



module.exports = { createMedicine,getMedicine };
