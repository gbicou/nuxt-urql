import { executeExchange } from '@urql/exchange-execute'
import { buildSchema } from '@bicou/countries-server-schema'
import { defineUrqlClient } from '#urql/client'

const schema = buildSchema('test')

export default defineUrqlClient((ssr) => {
  const runtimeConfig = useRuntimeConfig()

  return {
    url: runtimeConfig.public.endpoint,
    exchanges: [
      ssr,
      // mock countries server
      executeExchange({
        schema,
      }),
    ],
  }
})
