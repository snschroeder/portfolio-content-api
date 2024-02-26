import { type Knex } from 'knex'

const userSeed = [
  {
    id: '48d6b0bd-91a7-42e2-ac30-5ac993425a63',
    email: 'example@example.com',
    password: 'password'
  }
]

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('user').del()

  // Inserts seed entries
  await knex('user').insert(userSeed)
};
