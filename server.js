
const express = require('express');         //import express module
const app = express();                      // create a new express application
const mongoose = require('mongoose');       // import mongoose module - library for mongoDB
const dotenv = require('dotenv');           // import dotenv - enviromental variables are saved on the .env file 
let cors = require('cors')

// Import Routes
const authRoute = require('./routes/auth');
const addHabit = require('./routes/addHabit');
const getHabits = require('./routes/getHabits');
const deleteHabit = require('./routes/deleteHabit');
const updatePercent = require('./routes/updatePercent');
const verifyToken = require('./routes/verifyToken');
//const resetHabits = require('./routes/reset');


// read the .env file for the enviromental variables
dotenv.config();

// Connect to Database
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db!'))

// Middleware
app.use(cors());
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/', addHabit);
app.use('/api/', getHabits);
app.use('/api/', deleteHabit);
app.use('/api/', updatePercent);
app.use('/api/', verifyToken);
//app.use('/api/', resetHabits);




app.listen(5000, () => console.log("Listening to port 5000..."));
