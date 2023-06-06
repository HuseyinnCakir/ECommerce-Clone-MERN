import { CustomError } from 'ts-custom-error'

export class HttpError extends CustomError {
  public statusCode?: number
  public code?: number
  public constructor(message: string) {
    super(message)
  }
}
