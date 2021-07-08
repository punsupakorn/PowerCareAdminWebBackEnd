const express = require('express');
const router = express.Router();
const {addOfficer} = require("../controller/AddOfficerController.js")

router.post('/',addOfficer);
 
module.exports = router ;

