require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

const app = express();

// express app
app.use(express.json());


// create routes
app.use('/api/', userRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to DB & listening on port ${process.env.PORT}!!`);
        });
    })