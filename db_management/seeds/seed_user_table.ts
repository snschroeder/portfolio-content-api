import { type Knex } from 'knex'

const userSeed = [
  {
    id: '48d6b0bd-91a7-42e2-ac30-5ac993425a63',
    email: 'example@example.com',
    password: '$2b$10$5WmH30we6EY1mmcbCa5/L.WcKh4yYP9oFyY1.wDyIRiiyoJeryd7u' // 'password', salt 10
  }
]

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('user').del()

  // Inserts seed entries
  await knex('user').insert(userSeed)
};
