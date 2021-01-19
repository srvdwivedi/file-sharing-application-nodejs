require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
    // DB connection
    mongoose.connect('mongodb+srv://souravdwivedi:admin@123@cluster0.0efip.mongodb.net/test?retryWrites=true&w=majority' , { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    });

}

module.exports = connectDB;