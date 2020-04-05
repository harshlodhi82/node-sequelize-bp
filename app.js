"use strict";
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const allRoutes = require("./routes")
const { routes, messages } = require("./helper")
const sequelize = require("./database/connection")
const commonMiddelWares = require("./middleware/common")
const app = express();

//** Database Sync */
sequelize.sync().then(()=>{
    console.log(messages.DB_CONNECTION_SUCCESS);
}).catch(console.log)

//** View engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//** Custom middelwares */
commonMiddelWares.logInit();
app.use(commonMiddelWares.doneInit)

//** Routes */
app.use(routes.DEFAULT, allRoutes.base);
app.use(routes.USER.DEFAULT, allRoutes.users);

//** Catch 404 and forward to error handler */
app.use(commonMiddelWares.catch404);

//** Error handler */
app.use(commonMiddelWares.errorHandeler);

module.exports = app;
