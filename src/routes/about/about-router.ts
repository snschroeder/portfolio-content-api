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
const jsonParser = express.json()

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

  .put(jsonParser, (async (req: Request, res: Response, next: NextFunction) => {
    const { aboutId } = req.params
    const imgLink: string = req.body.imgLink
    const header: string = req.body.header
    const body: string = req.body.body

    try {
      const updatedAboutData = await AboutService.putAboutData(req.app.get('db') as Knex, aboutId, imgLink, header, body)
      return res.status(201).json(updatedAboutData)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

export default aboutRouter
