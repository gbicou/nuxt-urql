import SchemaBuilder from '@pothos/core';
import { version } from '../../../package.json'
import { records, type ISO_3166_1_Record } from 'iso-3166-1-ts'

const builder = new SchemaBuilder({})

const Country = builder.objectRef<ISO_3166_1_Record>('Country')

builder.objectType(Country, {
  description: "A country record",
  fields: (t) => ({
    code: t.exposeString('alpha2', { description: 'ISO code' }),
    name: t.exposeString('name', { description: 'Name of country' }),
  })
})

builder.queryType({
  fields: (t) => ({
    version: t.string({
      description: 'Package version',
      resolve: () => version,
    }),
    countries: t.field({
      type: [Country],
      description: 'All countries',
      resolve: () => records
    })
  }),
})

export const schema = builder.toSchema()
