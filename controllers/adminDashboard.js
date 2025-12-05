import express from 'express'
import { userModel } from "../models/userModel.js";

const adminDash = async(req,res)=>{
  try{
    const users = await userModel.find();

    return res.json({
      success:true,
      message:"Data Fetched",
      users
    })
  } catch(err){
    return res.json({
      success:false,
      message:err.message
    })
  }
}

export { adminDash }