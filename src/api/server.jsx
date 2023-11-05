require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoute.jsx');

// express app
const app = express();

// middleware
app.use(express.json()); // parse incoming JSON data
app.use((req, res, next) => { // log path and HTTP method of incoming requests
    console.log(req.path, req.method)
    next()
});

// routes
app.use('/user', userRoute);

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})