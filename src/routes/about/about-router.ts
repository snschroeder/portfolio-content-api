import express from 'express'
import type {
  Request,
  Response,
  NextFunction,
  RequestHandler
} from 'express'
import type { Knex } from 'knex'

import AboutService from './about-service'

const aboutRouter = express.Router()
// const jsonParser = express.json()

aboutRouter
  .route('/:aboutId')
  .get((async (req: Request, res: Response, next: NextFunction) => {
    const { aboutId } = req.params
    try {
      const aboutData = await AboutService.getAbout(req.app.get('db') as Knex, aboutId)
      return res.status(200).json(aboutData)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

export default aboutRouter
