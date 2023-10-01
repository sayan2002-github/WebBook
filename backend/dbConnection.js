require('dotenv').config()
const mongoose = require('mongoose');

const mongooseUri = process.env.DATABASE;
mongoose.set('strictQuery', false);

const connectToMongo = ()=>{
    mongoose.connect(mongooseUri, ()=>{
        console.log("Succesfully connected to mongoDB.");
    })
}

module.exports = connectToMongo;