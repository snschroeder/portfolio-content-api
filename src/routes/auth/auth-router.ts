import express from 'express'
import xss from 'xss'
import type { RequestHandler } from 'express'
import type { Knex } from 'knex'

import { AuthService } from './auth-service'

const authRouter = express.Router()
const jsonParser = express.json()

authRouter
  .route('/')
  .post(jsonParser, (async (req, res, next) => {
    let email: string = req.body.email
    let password: string = req.body.password

    if (email === '' || password === '') {
      return res.status(400).json({ error: 'email and password are required' })
    }
    email = xss(email)
    password = xss(password)

    try {
      const user = await AuthService.getUser(req.app.get('db') as Knex, email)
      if (user.email === '') {
        return res.status(400).json({ error: 'invalid email or password' })
      }

      const isValidUser: boolean = await AuthService.validatePassword(
        req.app.get('db') as Knex,
        email,
        password
      )

      if (!isValidUser) {
        return res.status(400).json({ error: 'invalid email or password' })
      }

      const authToken = AuthService.createJWT(email, { id: user.id, email })
      return res.status(200).json({ authToken })
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)
