/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import xss from 'xss'
import { protectWithJWT } from '../../middleware/auth'

import type {
  Request,
  Response,
  NextFunction,
  RequestHandler
} from 'express'
import type { Knex } from 'knex'
import type { HomepageItem } from '../../../types'

import HomepageService from './homepage-service'

const homepageRouter = express.Router()
const jsonParser = express.json()

homepageRouter
  .route('/:homepageItemId')
  .get((async (req: Request, res: Response, next: NextFunction) => {
    if (req.session.views !== undefined) {
      req.session.views += 1
      console.log(req.session)
    } else {
      req.session.views = 1
      console.log(req.session)
    }

    const { homepageItemId } = req.params
    try {
      const homepageItem = await HomepageService.getHomepageItem(req.app.get('db') as Knex, homepageItemId)
      res.status(200).json(homepageItem)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

  // Valid JWT auth required for PUT, DELETE, and POST
  .all(protectWithJWT)
  .put(jsonParser, (async (req: Request, res: Response, next: NextFunction) => {
    const { homepageItemId } = req.params

    const homepageItem: HomepageItem = {
      header: req.body.header,
      portfolio_description: req.body.portfolio_description,
      dust_callout: req.body.dust_callout,
      dust_joke: req.body.dust_joke
    }

    let key: keyof HomepageItem
    for (key in homepageItem) {
      homepageItem[key] = xss(homepageItem[key])
    }
    try {
      const updatedHomepageItem = await HomepageService.updateHomepageItem(
        req.app.get('db') as Knex,
        homepageItemId,
        homepageItem
      )
      res.status(201).json(updatedHomepageItem)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

  .delete((async (req: Request, res: Response, next: NextFunction) => {
    const { homepageItemId } = req.params
    try {
      await HomepageService.deleteHomepageItem(req.app.get('db') as Knex, homepageItemId)
      res.status(204).send()
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

homepageRouter
  .route('/')
  .all(protectWithJWT)
  .post(jsonParser, (async (req: Request, res: Response, next: NextFunction) => {
    const homepageItem: HomepageItem = {
      header: req.body.header,
      portfolio_description: req.body.portfolio_description,
      dust_callout: req.body.dust_callout,
      dust_joke: req.body.dust_joke
    }

    let key: keyof HomepageItem
    for (key in homepageItem) {
      homepageItem[key] = xss(homepageItem[key])
    }

    try {
      const postedHomepageItem = await HomepageService.postHomepageItem(req.app.get('db') as Knex, homepageItem)
      res.status(201).json(postedHomepageItem)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

export default homepageRouter
