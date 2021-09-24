const {
  getAllTimeTable,
  deleteTimeSlot,
  deleteTimeTable,
} = require("../models/ScheduleModels");

const deleteDoctorSlot = async (req, res) => {
  const TimeTableID = req.body.TimeTableID;
  const Time = req.body.Time;
  try {
    await deleteTimeSlot(TimeTableID, Time);
    res.status(200).send("Delete Time", Time, "Success");
  } catch (error) {
    console.log(error);
    return error;
  }
};

// const removeAppointment = async(req,res)=>{
//     const DocumentID = req.body.DocumentID;
//     try {
//         deleteAppointment(DocumentID);
//         res.status(200).send('delete appointment success !');

//     } catch (error) {
//         res.status(500).json(error);
//     }
// }

module.exports = { getAllTimeTable, deleteDoctorSlot };
