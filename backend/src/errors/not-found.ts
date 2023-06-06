import { StatusCodes } from 'http-status-codes'
import { HttpError } from './HttpError'

class NotFoundError extends HttpError {
  public statusCode: number
  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}

export default NotFoundError
