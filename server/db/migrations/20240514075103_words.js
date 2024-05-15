export async function up(knex) {
    return knex.schema.createTable('words', (table) => {
      table.increments('id')
      table.integer('connection_id')
      table.string('name')
    })
}
  
export async function down(knex) {
    return knex.schema.dropTable('words')
}