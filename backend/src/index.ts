import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connect'
import bodyParser from 'body-parser'
import notFoundMiddleware from './middleware/not-found'
import errorHandleMiddleware from './middleware/error-handler'
import './controllers/authController'
import { AppRouter } from './AppRouter'
const app = express()
dotenv.config()
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome!')
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(AppRouter.getInstance())
app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)

const port = process.env.PORT || 5000
const start = async () => {
  try {
    if (process.env.MONGO_URL) {
      await connectDB(process.env.MONGO_URL)
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`)
      })
    }
  } catch (error) {
    console.log(error)
  }
}

start()
