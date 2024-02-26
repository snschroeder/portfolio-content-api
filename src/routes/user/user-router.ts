import express from 'express'
import type {
  Request,
  Response,
  NextFunction,
  RequestHandler
} from 'express'
import type { Knex } from 'knex'

import { UserService } from './user-service'

const userRouter = express.Router()
const jsonParser = express.json()

userRouter
  .route('/:userId')
  .get((async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params
    try {
      const userData = await UserService.getUser(req.app.get('db') as Knex, userId)
      return res.status(200).json(userData)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

userRouter
  .route('/')
  .post(jsonParser, (async (req: Request, res: Response, next: NextFunction) => {
    const email: string = req.body.email
    const password: string = req.body.password
    try {
      if (email !== '' && password !== '') {
        const newUserData = await UserService.createNewUser(req.app.get('db') as Knex, email, password)
        return res.status(201).json(newUserData)
      }
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

export default userRouter
