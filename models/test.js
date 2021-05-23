var express = require('express');
var path = require('path');
var db = require('../config/firebase_config');

const doctornameRef = db.collection("Doctor");
const snapshot = doctornameRef.where("FirstName", "==", true).get();
snapshot.forEach((doc) => {
console.log(doc.id, "=>", doc.data());
  });

  module.exports {test}
