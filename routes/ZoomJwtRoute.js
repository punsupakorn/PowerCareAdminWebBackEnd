// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const rp = require("request-promise");
// const jwt = require("jsonwebtoken");

// const payload = {
//   iss: "API_KEY",
//   exp: new Date().getTime() + 5000,
// };
// const token = jwt.sign(payload, "API_SECRET");

// router.get("/", (req, res) => {
//   email = "Supakorn.pun@mail.kmutt.ac.th";
//   var options = {
//     method: "POST",
//     uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
//     body: {
//       topic: "test meeting title",
//       type: 1,
//       settings: {
//         host_video: "true",
//         participant_video: "true",
//       },
//     },
//     auth: {
//       bearer: token,
//     },
//     headers: {
//       "User-Agent": "Zoom-api-Jwt-Request",
//       "content-type": "application/json",
//     },
//     json: true, //Parse the JSON string in the response
//   };

//   rp(options)
//     .then(function (response) {
//       console.log("response is: ", response);
//       res.send("create meeting result: " + JSON.stringify(response));
//     })
//     .catch(function (err) {
//       // API call failed...
//       console.log("API call failed, reason ", err);
//     });
// });

// module.exports = router;
