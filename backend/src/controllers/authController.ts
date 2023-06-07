import { Request, Response, NextFunction } from 'express'
import { get, controller, bodyValidator, post } from './decorators'
import { BadRequestError, UnAuthenticatedError } from '../errors/index'

import { User, UserModel } from '../models/user'
import attachCookie from '../utils/attachCookie'
import { StatusCodes } from 'http-status-codes'
@controller('/auth')
export class LoginController {
  @post('/register')
  @bodyValidator('email', 'password', 'firstName', 'lastName')
  async postRegister(req: Request, res: Response) {
    let firstName: string = req.body.firstName
    let lastName: string = req.body.lastName
    let email: string = req.body.email
    let password: string = req.body.password
    let gender: string = req.body.gender
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
      },
    })
  }

  @post('/login')
  @bodyValidator('email', 'password')
  async postLogin(req: Request, res: Response) {
    let email: string = req.body.email
    let password: string | undefined = req.body.password

    const user = await UserModel.findOne({ email }).select('+password')
    if (!user) {
      throw new UnAuthenticatedError('Invalid Credentials')
    }

    const isPasswordCorrect = await user.comparePassword(password as string)
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT()
    attachCookie(res, token)

    res.status(StatusCodes.OK).json('Login successfully.')
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    res.cookie('token', 'logout', {
      httpOnly: true,
      expires: new Date(Date.now() + 1000),
    })
    res.status(StatusCodes.OK).json({ msg: 'user logged out!' })
  }
}
