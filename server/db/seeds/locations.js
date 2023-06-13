exports.seed = async function (knex) {
  await knex('locations').del()
  await knex('locations').insert ([
    {
      id: 1,
      location: 'Magnet bay'
    }
  ])

}