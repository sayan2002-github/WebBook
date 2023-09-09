const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.set('strictQuery', false);

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    dateStamp:{
        type: Date,
        default: Date.now
    }
  });

  const User = mongoose.model('users', userSchema);
  module.exports = User;