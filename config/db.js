require('dotenv').config();
const mongoose = require('mongoose');



function connectDB() {
    //Database Connection

    mongoose.connect(process.env.MONGO_CONNECTION_URL)
.then(() => console.log('MONGODB Connection is Successfull!'))
.catch((error) => {
    console.log(error);
});
}

module.exports = connectDB;