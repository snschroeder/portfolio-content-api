import express from 'express'
import xss from 'xss'

import type {
  Request,
  Response,
  NextFunction,
  RequestHandler
} from 'express'
import type { Knex } from 'knex'
import type { ContactItem } from '../../../types'

import ContactService from './contact-service'

const contactRouter = express.Router()
const jsonParser = express.json()

contactRouter
  .route('/all')
  .get((async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allInquiries = await ContactService.getAllContactItems(req.app.get('db') as Knex)
      res.status(200).send(allInquiries)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

contactRouter
  .route('/')
  .post(jsonParser, (async (req: Request, res: Response, next: NextFunction) => {
    const contactItem: ContactItem = {
      name: req.body.name,
      email: req.body.email,
      inquiry: req.body.inquiry
    }
    let key: keyof ContactItem
    for (key in contactItem) {
      contactItem[key] = xss(contactItem[key])
    }
    try {
      const postedContactItem = await ContactService.postContactItem(req.app.get('db') as Knex, contactItem)
      res.status(201).json(postedContactItem)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

export default contactRouter
