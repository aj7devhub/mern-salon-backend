import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  role:{
    type:String
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  }
})

const adminModel = mongoose.model('admin',adminSchema)

export { adminModel }