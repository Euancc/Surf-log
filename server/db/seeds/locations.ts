exports.seed = async function (knex: (arg0: string) => { (): any; new(): any; del: { (): any; new(): any }; insert: { (arg0: { id: number; location: string }[]): any; new(): any } }) {
  await knex('locations').del()
  await knex('locations').insert ([
    {
      id: 1,
      location: 'Magnet bay'
    }
  ])

}