import express from "express"
import { userInput } from '../controllers/user.js'
const userRouter = express.Router()

userRouter.post('/user',userInput);

export { userRouter }