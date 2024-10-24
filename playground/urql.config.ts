import { fetchExchange } from '@urql/core'
import { cacheExchange } from '@urql/exchange-graphcache'
import { makeDefaultStorage } from '@urql/exchange-graphcache/default-storage'
import type { GraphCacheConfig } from './gql/types'
import schema from './gql/introspection'
import { defineUrqlClient } from '#urql/client'
import { useRequestHeaders } from '#app'

export default defineUrqlClient((ssr) => {
  const exchanges = [ssr, fetchExchange]

  if (import.meta.client) {
    // configure urql graphcache with codegen types
    const cacheConfig: GraphCacheConfig = {
      schema,
      keys: {
        Country: data => data.code ?? null,
      },
      resolvers: {
        Query: {
          country: (_, args) => ({ __typename: 'Country', code: args.code.toString() }),
        },
      },
      storage: makeDefaultStorage(),
    }
    // insert cache exchange
    exchanges.unshift(cacheExchange(cacheConfig))
  }

  const headers = useRequestHeaders(['cookie', 'authorization'])

  return {
    exchanges,
    fetchOptions: () => ({ headers }),
  }
})
