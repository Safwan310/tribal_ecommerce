import express, { Router } from 'express'
const userRoutes = express.Router()
import { authUser,getUserProfile,registerUser,updateUserProfile } from '../controllers/userController.js';
import { protect } from "../middleware/authMiddleware.js"

userRoutes.route('/').post(registerUser)
userRoutes.post('/login',authUser)
userRoutes.route('/profile').get(protect, getUserProfile).put(protect,updateUserProfile)

export default userRoutes