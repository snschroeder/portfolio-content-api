import express from 'express'
import type {
  Request,
  Response,
  NextFunction,
  RequestHandler
} from 'express'
import type { Knex } from 'knex'

import GalleryService from './gallery-service'

const galleryRouter = express.Router()
// const jsonParser = express.json()

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

export default galleryRouter
