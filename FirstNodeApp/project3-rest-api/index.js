const express = require('express');
const mongoose = require('mongoose');
const bodyPerser = require('body-parser');
const app = express();
const courseRoutes = require('./routes/course');
require('dotenv').config();
const config = process.env;

// app.get('/',(req,res)=>{
//     res.send('This is the get request of express js library...updated');
// }).listen(2000); 32

app.use(bodyPerser.json());
app.use('/api/v1/courses',courseRoutes);

mongoose.connect(config.DB_CONNECTION_URL);
console.log('database connect successfully.');

app.listen(config.PORT,()=>{
    console.log('project start....');
});