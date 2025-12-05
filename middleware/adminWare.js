import jwt from 'jsonwebtoken';
import 'dotenv/config'

const adminLogin = async(req,res,next) =>{
  const { token } = req.cookies;

  if(!token){
    return res.status(401).json({
      success:false,
      message:'Not authorized to access.'
    })
  }

  try{
    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);

    if(tokenDecode.role !== "Admin"){
      return res.status(403).json({
        success:false,
        message:'Not authorized to access.'
      })
    }

    req.admin = {
      id : tokenDecode.id,
      role : tokenDecode.role
    }

    next();

  } catch (error){
    return res.status(401).json({
      success:false,
      message:'Not authorized to access.'
    })
  }
}

export { adminLogin }