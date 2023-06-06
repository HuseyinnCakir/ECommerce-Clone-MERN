import express, { Router } from 'express'
const router = Router()

import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})
import { register, login, logout } from '../controllers/authController'
router.route('/register').post(register)
router.route('/login').post(apiLimiter, login)

router.get('/logout', logout)
export default router
