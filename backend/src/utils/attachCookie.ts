import express, { Response } from 'express'

const attachCookie = (res: Response, token: any) => {
  const oneDay = 1000 * 60 * 60 * 24

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === 'production',
  })
}

export default attachCookie
