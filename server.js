require('dotenv').config(); 
const express = require('express');
const app = express();


const PORT = process.env.PORT;

const connectDB = require("./config/db");
connectDB();


app.use('api/files', require('./routes/files')); 


app.listen(PORT, ()=> {
    console.log(`Running on port : ${PORT}`);

})