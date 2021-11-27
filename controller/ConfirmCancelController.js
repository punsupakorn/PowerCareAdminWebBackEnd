const { getUser } = require("../models/UserModel");
const { deleteAppointment } = require("../models/AppointmentModel");
const { ConfirmCancel, client } = require("../linepushmessage/linepushmessage");

// const pushMessage = async(userId, AppointmentID)=>{

//         // const arr = [];
//         // const user = await getUser(userId);
//         // const LineUserId = user.LineUserId;
//         // const appointmentRef = db.collection("Appointment").doc(AppointmentID);
//         // const doc = await appointmentRef.get();
//         // if(doc.exists){
//         //     arr.push(doc.data());
//         // }
//         // const result = arr[0];
//         // await appointmentRef.delete({
//         //     Status: "ยกเลิกนัดสำเร็จ"
//         // });
//         // client.pushMessage(LineUserId,ConfirmCancel(
//         //     result.
//         // ))

//     try {
        
//     } catch (error) {
        
//     }
// }

module.exports = { getUser, deleteAppointment };
