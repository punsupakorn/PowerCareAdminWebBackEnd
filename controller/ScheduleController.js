const {getAllTimeTable,deleteAppointment} = require("../models/AppointmentModels");


const removeAppointment = async(req,res)=>{
    const DocumentID = req.body.DocumentID;
    try {
        deleteAppointment(DocumentID);
        res.status(200).send('delete appointment success !');
        
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports={getAllTimeTable,removeAppointment};