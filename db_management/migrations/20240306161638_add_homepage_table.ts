import type { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('homepage', (table) => {
      table.uuid('id').defaultTo(knex.fn.uuid())
      table.string('header').notNullable()
      table.string('portfolio_description').notNullable()
      table.string('dust_callout')
      table.string('dust_joke')
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('homepage')
}
