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
  // eslint-disable-next-line @typescript-eslint/naming-convention
  putAboutData: (db: Knex, id: string, img_link: string, header: string, body: string) => db('about')
    .where({ id })
    .update({
      img_link,
      header,
      body
    }, ['id', 'img_link', 'header', 'body'])
}

export default AboutService
