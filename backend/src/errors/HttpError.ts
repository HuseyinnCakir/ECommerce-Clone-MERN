import { CustomError } from 'ts-custom-error'

export class HttpError extends CustomError {
  public constructor(message: string) {
    super(message)
  }
}
