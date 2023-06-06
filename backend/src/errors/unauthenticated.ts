import { StatusCodes } from 'http-status-codes'
import { HttpError } from './HttpError'

class UnAuthenticatedError extends HttpError {
  public statusCode: number
  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

export default UnAuthenticatedError
