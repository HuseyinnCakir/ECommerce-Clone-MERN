import { Request, Response, NextFunction } from 'express'
import { get, controller, bodyValidator, post } from './decorators'
import { BadRequestError, UnAuthenticatedError } from '../errors/index'

const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    throw new BadRequestError('please provide all values')
  }
  const userAlreadyExists = await User.findOne({ email })
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use')
  }
  const user = await User.create({ name, email, password })

  const token = user.createJWT()
  attachCookie({ res: Response, token })
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
    },
  })
}
