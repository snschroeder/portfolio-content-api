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
    ]),

  deleteGalleryItem: (db: Knex, id: string) => db('gallery')
    .where({ id })
    .del(),

  postGalleryItem: (db: Knex, galleryItem: GalleryItem) => db('gallery')
    .insert(galleryItem, [
      'id',
      'title',
      'img_link',
      'tagline',
      'description',
      'stack'
    ])
}

export default GalleryService
