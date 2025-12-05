import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  role: {
    type:String,
    required:true
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  selectedDate: {
    type: String,
    required: true,
  }
});

const userModel = mongoose.model('user',userSchema)

export { userModel }