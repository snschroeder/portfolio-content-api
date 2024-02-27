import type { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('about', (table) => {
      table.uuid('id').defaultTo(knex.fn.uuid())
      table.string('img_link')
      table.string('header').notNullable()
      table.string('body').notNullable()
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('about')
}
