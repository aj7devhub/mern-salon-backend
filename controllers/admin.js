import { adminModel } from "../models/adminModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'

const admin = async (req,res)=>{

  const {email,password} = req.body;


  if(!password || !email){
    return res.json({
      success:false,
      message:'Missing Details.'
    })
  }

  try{

    const findAdmin = await adminModel.findOne({email})

    if(!findAdmin){
      return res.json({
        success:false,
        message: "Something went wrong."
      })
    }
    
    const adminPassword = await bcrypt.compare(password,findAdmin.password)
    
    if(!adminPassword){
      return res.json({
        success:false,
        message: "Something went wrong."
      })
    }

    if(findAdmin && adminPassword){

      const token = jwt.sign({id:findAdmin._id,role:'Admin'},process.env.JWT_SECRET,{expiresIn: '24h'})

      res.cookie('token',token,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
      })
      return res.json({
        success:true,
        message:'Welcome Admin'
      })
    }
  }catch(error){
    return res.json({
      success:false,
      message:error.message
    })
  }
}
export { admin }