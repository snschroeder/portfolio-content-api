import express from 'express'
import xss from 'xss'
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
    let imgLink: string = req.body.imgLink
    let header: string = req.body.header
    let body: string = req.body.body

    imgLink = xss(imgLink)
    header = xss(header)
    body = xss(body)

    if (imgLink === '' || header === '' || body === '') {
      return res.status(400).json('All fields are required')
    }

    try {
      const updatedAboutData = await AboutService.putAboutData(req.app.get('db') as Knex, aboutId, imgLink, header, body)
      return res.status(201).json(updatedAboutData)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

export default aboutRouter
