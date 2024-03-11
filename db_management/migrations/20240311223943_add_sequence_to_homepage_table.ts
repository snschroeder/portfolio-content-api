import type { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .alterTable('homepage', (table) => {
      table.integer('sequence').notNullable()
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .alterTable('homepage', (table) => {
      table.dropColumn('sequence')
    })
}
