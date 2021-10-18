var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

// var testRouter = require("./routes/testRoute");
var loginRouter = require("./routes/LoginRoute");
var addOfficerRouter = require("./routes/AddOfficerRoute");
var AppointmentRouter = require("./routes/AppointmentRoute");
var officerListRouter = require("./routes/OfficerListRoute");
var scheduleRouter = require("./routes/ScheduleRoute");
var workingRouter = require("./routes/WorkingRoute");
var medicineRouter = require("./routes/MedicineRoute");
var manageMedicineRouter = require("./routes/ManageMedicineRoute");
var editOfficerRouter = require("./routes/EditOfficerRoute");
var userRouter = require("./routes/UserRoute");
var userDetailRouter = require("./routes/UserDetailRoute");
var confirmAddOfficerRouter = require("./routes/ConfirmAddOfficerRoute");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/test", testRouter);
app.use("/Login", loginRouter);
app.use("/AddOfficer", addOfficerRouter);
app.use("/Appointment", AppointmentRouter);
app.use("/OfficerList", officerListRouter);
app.use("/Schedule", scheduleRouter);
app.use("/Working", workingRouter);
app.use("/Medicine", medicineRouter);
app.use("/EditOfficer", editOfficerRouter);
app.use("/User", userRouter);
app.use("/ManageMedicine", manageMedicineRouter);
app.use("/UserDetail", userDetailRouter);
app.use("/ConfirmAddOfficer", confirmAddOfficerRouter);

module.exports = app;
