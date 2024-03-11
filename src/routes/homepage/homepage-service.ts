import type { Knex } from 'knex'
import type { HomepageItem } from '../../../types'

const HomepageService = {
  getHomepageItem: (db: Knex, id: string) => db('homepage')
    .select(
      'header',
      'portfolio_description',
      'dust_callout',
      'dust_joke'
    )
    .where({ id })
    .first(),

  getHomepageItemBySeq: (db: Knex, sequence: number) => db('homepage')
    .select(
      'header',
      'portfolio_description',
      'dust_callout',
      'dust_joke'
    )
    .where({ sequence })
    .first(),

  updateHomepageItem: (db: Knex, id: string, homepageItem: HomepageItem) => db('homepage')
    .where({ id })
    .update(homepageItem, [
      'header',
      'portfolio_description',
      'dust_callout',
      'dust_joke'
    ]),

  deleteHomepageItem: (db: Knex, id: string) => db('homepage')
    .where({ id })
    .del(),

  postHomepageItem: (db: Knex, homepageItem: HomepageItem) => db('homepage')
    .insert(homepageItem, [
      'header',
      'portfolio_description',
      'dust_callout',
      'dust_joke'
    ])
}

export default HomepageService
