import type { Knex } from 'knex'
import type { GalleryItem } from '../../../types'

const GalleryService = {
  getGalleryItem: (db: Knex, id: string) => db('gallery')
    .select(
      'id',
      'title',
      'img_link',
      'tagline',
      'description',
      'stack'
    )
    .where({ id })
    .first(),

  updateGalleryItem: (db: Knex, id: string, galleryItem: GalleryItem) => db('gallery')
    .where({ id })
    .update(galleryItem, [
      'id',
      'title',
      'img_link',
      'tagline',
      'description',
      'stack'
    ])
}

export default GalleryService
