const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.set('strictQuery', false);

const noteSchema = new Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tags:{
        type: String,
        default: "General"
    },
    dateStamp:{
        type: Date,
        default: Date.now
    }
  });

  module.exports = mongoose.model('note', noteSchema);