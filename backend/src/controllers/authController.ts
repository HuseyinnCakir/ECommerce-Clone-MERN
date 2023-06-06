import { Request, Response, NextFunction } from 'express'
import { get, controller, bodyValidator, post } from './decorators'
import { BadRequestError, UnAuthenticatedError } from '../errors/index'

import { UserModel } from '../models/user'
import attachCookie from '../utils/attachCookie'
import { StatusCodes } from 'http-status-codes'
@controller('/auth')
export class LoginController {
  @post('/register')
  @bodyValidator('email', 'password', 'firstName', 'lastName')
  async postRegister(req: Request, res: Response) {
    const { firstName, lastName, email, password, gender } = req.body
    if (!firstName || !lastName || !email || !password) {
      throw new BadRequestError('please provide all values')
    }
    const userAlreadyExists = await UserModel.findOne({ email })
    if (userAlreadyExists) {
      throw new BadRequestError('Email already in use')
    }
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
      gender,
    })
    const token = user.createJWT()
    attachCookie(res, token)
    res.status(StatusCodes.CREATED).json({
      user: {
        email: user.email,
        name: user.firstName,
      },
    })
  }
}
