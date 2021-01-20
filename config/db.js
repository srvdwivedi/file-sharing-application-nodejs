require('dotenv').config()
const mongoose = require('mongoose');
function connectDB() {
    // DB connection
    const uri = process.env.ATLAS_URI ;
    mongoose.connect(uri , { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    });

}

module.exports = connectDB;