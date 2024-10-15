import { cacheExchange } from '@urql/core'
import { executeExchange } from '@urql/exchange-execute'
import { buildSchema } from '@bicou/countries-server-schema'
import { defineUrqlClient } from '#urql/client'

const schema = buildSchema('test')

export default defineUrqlClient(ssr => ({
  exchanges: [
    cacheExchange,
    ssr,
    // mock countries server
    executeExchange({
      schema,
    }),
  ],
}))
