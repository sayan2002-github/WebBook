const mongoose = require('mongoose');
const mongooseUri = "mongodb+srv://FirstMongo:712415@firstmongo.pgyxzry.mongodb.net/";
mongoose.set('strictQuery', false);

const connectToMongo = ()=>{
    mongoose.connect(mongooseUri, ()=>{
        console.log("Succesfully connected to mongoDB.");
    })
}

module.exports = connectToMongo;