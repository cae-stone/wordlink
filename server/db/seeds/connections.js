export async function seed(knex) {
  await knex('connections').del()

  await knex('connections').insert([
    { id: 1, name: 'pull using force' },
    { id: 2, name: 'bit of repetitive training' },
    { id: 3, name: 'replacement' },
    { id: 4, name: 'beginning with day abbreviations' },
    { id: 5, name: 'bands without colors' },
    { id: 6, name: 'pleasant smells' },
    { id: 7, name: 'music genres' },
    { id: 8, name: 'male animals' },
    { id: 9, name: 'stores without numbers' },
    { id: 10, name: 'mountains in NZ' },
    { id: 11, name: 'slim ___' },
    { id: 12, name: 'synonyms for angry' },
    { id: 13, name: 'fishing' },
    { id: 14, name: 'blue ___' },
    { id: 15, name: 'spongebob characters' },
    { id: 16, name: 'number homophones' }
  ])
}