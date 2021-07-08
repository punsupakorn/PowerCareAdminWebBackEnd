var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var addOfficerRouter = require('./routes/AddOfficerRoute');
var addAppointmentRouter = require('./routes/AddAppointmentRoute');
var officerListRouter = require('./routes/OfficerListRoute');
var scheduleRouter = require('./routes/ScheduleRoute');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/AddOfficer', addOfficerRouter);
app.use('/AddAppointment', addAppointmentRouter);
app.use('/OfficerList',officerListRouter);
app.use('/Schedule',scheduleRouter);


module.exports = app;
