import {dedupExchange, fetchExchange} from "@urql/core";
import {defineUrqlClient} from "#urql";
import {cacheExchange} from "@urql/exchange-graphcache";
import type {GraphCacheConfig} from "./gql/types";
import schema from "./gql/introspection"

function getToken (): string {
  return Math.random().toString(16)
}

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

export default defineUrqlClient(ssr => ({
  url: 'http://localhost:3000/api/graphql',
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
  exchanges: [
    dedupExchange,
    cacheExchange(cacheConfig),
    ssr,
    fetchExchange,
  ]
}))
