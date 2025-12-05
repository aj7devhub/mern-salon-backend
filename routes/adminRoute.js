import express from 'express'
import { adminLogin } from '../middleware/adminWare.js';
import { adminDash } from '../controllers/adminDashboard.js';
import { admin } from '../controllers/admin.js';

const adminRouter = express.Router();

adminRouter.post('/login',admin)
adminRouter.get('/dashboard',adminLogin,adminDash);

export { adminRouter }