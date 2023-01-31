import {dedupExchange, fetchExchange} from "@urql/core";
import {defineUrqlConfig} from "#urql";
import {cacheExchange} from "@urql/exchange-graphcache";
import type {GraphCacheConfig} from "./gql/types";
import schema from "./gql/introspection"

// use urql graphcache
const cacheConfig: GraphCacheConfig = {
  schema,
  keys: {
    Country: (data) => data.code || null
  },
  resolvers: {
    Query: {
    //  country: (_, args) => ({__typename: "Country", code: args.code})
    }
  }
  // storage: process.client ? makeDefaultStorage() : undefined
}

export default defineUrqlConfig(ssr => ({
  url: 'http://localhost:3000/api/graphql',
  exchanges: [
    dedupExchange,
    cacheExchange(cacheConfig),
    ssr,
    fetchExchange,
  ]
}))
