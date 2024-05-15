export async function up(knex) {
    return knex.schema.createTable('connections', (table) => {
      table.increments('id')
      table.string('name')
    })
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('connections')
  }