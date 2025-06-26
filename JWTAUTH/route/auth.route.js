import express from 'express'
import { signup, login } from '../controller/Auth.controller.js'
import { SignupValidation } from '../middleware/Auth.middleware.js'

const router = express.Router()

router.post('/signup',SignupValidation, signup)
router.post('/login', login)

export default router 