const express = require('express');
const db = require('../config/firebase_config');
const router = express.Router();
// const login = require('../controller/logincontroller');

router.get('/',(req,res)=> {
  res.render('login');
});

router.post('/',async(req,res)=>{
  var Username = req.body.Username;
  var Password = req.body.Password;

  const AdminRef = db.collection('Admin');
  const snapshot = await AdminRef.where('Username', '==', true).get();
  // const snapshot = await AdminRef.where("Username","Password").get();

if (snapshot.empty) {
  console.log('No matching documents.');
  return;
}
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
})
  // var Admin = login.read();
  
  // if (Username,Password != Admin) {
  //   console.log('Yeah!');
  //   res.render('home');
  // }else{
  //   console.log('so sad :(');
  // }
// });

module.exports = router ;