const express = require('express');
const db = require('../config/firebase_config');
const router = express.Router();
// const register = require('../controller/regiscontroller');
const {addUser} = require('../controller/regiscontroller');

router.post('/',addUser);
 
module.exports = router ;

