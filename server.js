import express from "express";
import { connectDB } from "./configs/dbConfig.js";
import 'dotenv/config'
import { userRouter } from "./routes/userRoute.js";
import { adminRouter } from "./routes/adminRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
const port = process.env.PORT || 4000;
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
  origin:"https://ajdevhub-mern-salon.netlify.app",
  credentials:true
}))

app.get('/api',(req,res)=>{
  res.send('API is running...');
})
app.use('/api/appointment',userRouter)
app.use('/admin',adminRouter)
app.listen(port,()=>{
  console.log(`Server has been started on PORT:${port}`)
})

