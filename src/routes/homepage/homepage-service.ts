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

  updateHomepageItem: (db: Knex, id: string, homepageItem: HomepageItem) => db('homepage')
    .where({ id })
    .update(homepageItem, [
      'header',
      'portfolio_description',
      'dust_callout',
      'dust_joke'
    ])
}

export default HomepageService
