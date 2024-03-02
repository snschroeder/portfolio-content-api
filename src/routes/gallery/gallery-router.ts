import express from 'express'
import xss from 'xss'
import type {
  Request,
  Response,
  NextFunction,
  RequestHandler
} from 'express'
import type { Knex } from 'knex'
import type { GalleryItem } from '../../../types'

import GalleryService from './gallery-service'

const galleryRouter = express.Router()
const jsonParser = express.json()

galleryRouter
  .route('/:galleryItemId')
  .get((async (req: Request, res: Response, next: NextFunction) => {
    const { galleryItemId } = req.params
    try {
      const galleryItemData = await GalleryService.getGalleryItem(req.app.get('db') as Knex, galleryItemId)
      res.status(200).json(galleryItemData)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

  .put(jsonParser, (async (req: Request, res: Response, next: NextFunction) => {
    const { gallyerItemId } = req.params

    const galleryItem: GalleryItem = {
      title: req.body.title,
      img_link: req.body.imgLink,
      tagline: req.body.tagline,
      description: req.body.description,
      stack: req.body.stack
    }

    let key: keyof GalleryItem
    for (key in galleryItem) {
      galleryItem[key] = xss(galleryItem[key])
    }
    console.log(galleryItem)

    try {
      const updatedGalleryItem = await GalleryService.updateGalleryItem(
        req.app.get('db') as Knex,
        gallyerItemId,
        galleryItem
      )
      console.log(updatedGalleryItem)
      res.status(201).json('updatedGalleryItem')
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

export default galleryRouter
