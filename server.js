const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// read the .env file for the enviromental variables
dotenv.config();

// Connect to Database
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to db!'))

// Import Routes
const authRoute = require('./routes/auth');

// Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log("Listening to port 3000..."));
