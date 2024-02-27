import express from 'express'
import knex from '../knex'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

import userRouter from './routes/user/user-router'
import authRouter from './routes/auth/auth-router'
import aboutRouter from './routes/about/about-router'
import errorHandler from './error-handler/error-handler'
import { ServerError } from './error-handler/ServerError'

const app = express()
const port = process.env.PORT ?? 3000

// =================== //
// Middleware          //
// =================== //

app.use(helmet())
app.use(cors())
app.use(express.json())
app.set('db', knex)

// =================== //
// Routes              //
// =================== //

app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/about', aboutRouter)

// =================== //
// Error Handling      //
// =================== //

// Catch-all 404 handler
app.use((req, res, next) => {
  const error = new ServerError({ message: 'Path not found', status: 404 })
  next(error)
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})

export default app
