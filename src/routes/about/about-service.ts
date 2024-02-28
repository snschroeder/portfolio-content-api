/* eslint-disable @typescript-eslint/naming-convention */
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
    .first(),

  putAboutData: (db: Knex, id: string, img_link: string, header: string, body: string) => db('about')
    .where({ id })
    .update({
      img_link,
      header,
      body
    }, ['id', 'img_link', 'header', 'body']),

  postAboutData: (db: Knex, img_link: string, header: string, body: string) => db('about')
    .insert({
      img_link,
      header,
      body
    }, ['id', 'img_link', 'header', 'body']),

  deleteAbout: (db: Knex, id: string) => db('about')
    .where({ id })
    .del()
}

export default AboutService
