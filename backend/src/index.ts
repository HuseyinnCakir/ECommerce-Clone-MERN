import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import notFoundMiddleware from './middleware/not-found'
import errorHandleMiddleware from './middleware/error-handler'
const app = express()
dotenv.config()
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome!')
})

app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is listening on port ${port}...`))
