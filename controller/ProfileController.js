const {getProfile} = require("../models/OfficerModels");
// const {
//   getAdminProfile,
//   getDoctorProfile,
//   getStaffProfile,
// } = require("../models/OfficerModels");

// const getProfile = (uid) => {
//   const checkstaff = getStaffProfile(uid);
//   const checkAdmin = getAdminProfile(uid);
//   const checkDoctor = getDoctorProfile(uid);
//   console.log(checkAdmin, checkDoctor, checkstaff);
//   try {
//     if (checkstaff !== false) {
//       // const profile = {
//       //   DocumentID = checkstaff.DocumentID,
//       //   FirstName: checkstaff.FirstName,
//       //   LastName: checkstaff.LastName,
//       //   Position: checkstaff.Position,
//       //   Phone: checkstaff.Phone,
//       //   Password: checkstaff.Password,
//       //   Email: checkstaff.Email,
//       // };
//       // return profile;
//     } else if (checkDoctor !== false) {
//       // const profile = {
//       //     DocumentID = checkDoctor.DocumentID,
//       //     FirstName: checkDoctor.FirstName,
//       //     LastName: checkDoctor.LastName,
//       //     Position: checkDoctor.Position,
//       //     Phone: checkDoctor.Phone,
//       //     Password: checkDoctor.Password,
//       //     Email: checkDoctor.Email,
//       //   };
//       //   return profile;
//     } else if (checkAdmin !== false) {
//       // const profile = {
//       //     DocumentID = checkAdmin.DocumentID,
//       //     FirstName: checkAdmin.FirstName,
//       //     LastName: checkAdmin.LastName,
//       //     Position: checkAdmin.Position,
//       //     Phone: checkAdmin.Phone,
//       //     Password: checkAdmin.Password,
//       //     Email: checkAdmin.Email,
//       //   };
//       //   return profile;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     return error;
//   }
// };

module.exports = { getProfile };
