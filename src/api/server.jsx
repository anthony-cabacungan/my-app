require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes.jsx');
const jobRoutes = require('./routes/jobRoutes.jsx');

// express app
const app = express();

// middleware
app.use(express.json()); // parse incoming JSON data
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// routes
app.use('/user', userRoutes);
app.use('/job', jobRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to database...')
            console.log('listening on port: ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

