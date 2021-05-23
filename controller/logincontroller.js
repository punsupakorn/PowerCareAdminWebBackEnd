const express = require("express");
const db = require("../config/firebase_config");
const router = express.Router();


read = async (Username,Password) => {
  const AdminRef = db.collection('Admin');
  const snapshot = await AdminRef.where("Username","Password").get();
if (snapshot.empty) {
  console.log('No matching documents.');
  return;
}
else{
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
} 

//     const AdminRef = db.collection('Admin');
//     const snapshot = await AdminRef.get({
//         Username : Username,
//         Password : Password
//     });
//     snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data(Username,Password));
// });
}

module.exports = { read } ;