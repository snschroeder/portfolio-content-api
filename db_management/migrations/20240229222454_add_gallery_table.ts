import type { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('gallery', (table) => {
      table.uuid('id').defaultTo(knex.fn.uuid())
      table.string('title').notNullable()
      table.string('img_link').notNullable()
      table.string('tagline').notNullable()
      table.string('description', 2500).notNullable()
      table.string('stack').notNullable()
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('gallery')
}
