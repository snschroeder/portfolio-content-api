import type { Knex } from 'knex'

const AboutService = {
  getAbout: (db: Knex, id: string) => db('about')
    .select(
      'id',
      'img_link',
      'header',
      'body'
    )
    .where({ id })
    .first()
}

export default AboutService
