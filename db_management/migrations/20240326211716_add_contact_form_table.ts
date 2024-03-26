import type { Knex } from 'knex'

export async function up (knex: Knex): Promise<void> {
  await knex.schema
    .createTable('contact', (table) => {
      table.uuid('id').defaultTo(knex.fn.uuid())
      table.string('email').notNullable()
      table.string('name').notNullable()
      table.string('inquiry', 2500).notNullable()
    })
}

export async function down (knex: Knex): Promise<void> {
  await knex.schema
    .dropTable('contact')
}
