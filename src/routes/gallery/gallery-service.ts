import type { Knex } from 'knex'

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
}

export default GalleryService
