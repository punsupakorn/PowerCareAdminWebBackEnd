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
var profileRouter = require("./routes/ProfileRoute");
var workingDetailRouter = require("./routes/WorkingDetailRoute");
var postponeRouter = require("./routes/PostponeRoute");
var confirmCancelRouter = require("./routes/ConfirmCancelRoute");
var summaryPostponeRouter = require("./routes/SummaryPostponeRoute");
var workingDoctorRouter = require("./routes/WorkingDoctorRoute");
var selectWorkingRouter = require("./routes/SelectWorkingRoute");
var homescreenDoctorRouter = require("./routes/HomescreenDoctorRoute");
var workingDetailDoctorRouter = require("./routes/WorkingDetailDoctorRoute");
var usersummaryRouter = require("./routes/UserSummaryRoute");
var pushVdoRouter = require("./routes/PushVdoRoute");
var summaryDoctorRouter = require("./routes/SummaryDoctorRoute");
var pushSummaryRouter = require("./routes/PushSummaryRoute");

var app = express();
var server = require("http").Server(app);
const io = require("socket.io")(server);

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
app.use("/Profile", profileRouter);
app.use("/WorkingDetail", workingDetailRouter);
app.use("/Postpone", postponeRouter);
app.use("/ConfirmCancel", confirmCancelRouter);
app.use("/SummaryPostpone", summaryPostponeRouter);
app.use("/WorkingDoctor", workingDoctorRouter);
app.use("/SelectWorking", selectWorkingRouter);
app.use("/HomescreenDoctor", homescreenDoctorRouter);
app.use("/WorkingDetailDoctor", workingDetailDoctorRouter);
app.use("/UserSummary", usersummaryRouter);
app.use("/PushVdo", pushVdoRouter);
app.use("/SummaryDoctor", summaryDoctorRouter);
app.use("/PushSummary", pushSummaryRouter);

// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`server is running on port: ${PORT}`);
// });

module.exports = app;
