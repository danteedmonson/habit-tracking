
const express = require('express');         //import express module
const app = express();                      // create a new express application
const mongoose = require('mongoose');       // import mongoose module - library for mongoDB
const dotenv = require('dotenv');           // import dotenv - enviromental variables are saved on the .env file 

// Import Routes
const authRoute = require('./routes/auth');

// read the .env file for the enviromental variables
dotenv.config();

// Connect to Database
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db!'))

// Middleware
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log("Listening to port 3000..."));
