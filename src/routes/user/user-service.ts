import type { Knex } from 'knex'

export const UserService = {
  getUser: (db: Knex, id: string) => db('user')
    .select(
      'id',
      'email'
    )
    .where({ id })
    .first(),

  createNewUser: (db: Knex, email: string, password: string) => db('user')
    .insert({ email, password }, ['id', 'email'])
}
