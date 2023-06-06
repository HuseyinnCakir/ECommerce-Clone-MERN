import { StatusCodes } from 'http-status-codes'
import { HttpError } from './HttpError'

class BadRequestError extends HttpError {
  public statusCode: number
  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default BadRequestError
