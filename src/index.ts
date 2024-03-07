import express from 'express'
import knex from '../knex'
import cors from 'cors'
import helmet from 'helmet'
import session from 'express-session'
import { v4 as uuid } from 'uuid'
import 'dotenv/config'

import userRouter from './routes/user/user-router'
import authRouter from './routes/auth/auth-router'
import aboutRouter from './routes/about/about-router'
import galleryRouter from './routes/gallery/gallery-router'
import homepageRouter from './routes/homepage/homepage-router'

import errorHandler from './error-handler/error-handler'
import { ServerError } from './error-handler/ServerError'
import { SESSION_SECRET } from '../connection'

const app = express()
const port = process.env.PORT ?? 3000
const apiVersion = 'v1'

// =================== //
// Middleware          //
// =================== //

app.use(helmet())
app.use(cors())
app.use(express.json())
app.set('db', knex)
app.use(
  session({
    genid: function (req) {
      return uuid()
    },
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)

// =================== //
// Routes              //
// =================== //

app.use(`/${apiVersion}/user`, userRouter)
app.use(`/${apiVersion}/auth`, authRouter)
app.use(`/${apiVersion}/about`, aboutRouter)
app.use(`/${apiVersion}/gallery`, galleryRouter)
app.use(`/${apiVersion}/homepage`, homepageRouter)

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
