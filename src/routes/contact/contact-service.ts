import type { Knex } from 'knex'
import type { ContactItem } from '../../../types'

const ContactService = {
  getAllContactItems: (db: Knex) => db('contact')
    .select(
      'id',
      'name',
      'email',
      'inquiry'
    ),

  postContactItem: (db: Knex, contactItem: ContactItem) => db('contact')
    .insert(contactItem, [
      'id',
      'name',
      'email',
      'inquiry'
    ])
}

export default ContactService
