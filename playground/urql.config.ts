import { fetchExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import type { GraphCacheConfig } from "./gql/types";
import schema from "./gql/introspection";
import { defineUrqlClient } from "#urql/client";
import { makeDefaultStorage } from "@urql/exchange-graphcache/default-storage";
import { useRequestHeaders } from "#app";

// use urql graphcache
const cacheConfig: GraphCacheConfig = {
  schema,
  keys: {
    Country: (data) => data.code ?? null,
  },
  resolvers: {
    Query: {
      country: (_, args) => ({ __typename: "Country", code: args.code }),
    },
  },
  storage: process.client ? makeDefaultStorage() : undefined,
};

export default defineUrqlClient((ssr) => {
  const exchanges = process.server
    ? [ssr, fetchExchange]
    : [cacheExchange(cacheConfig), ssr, fetchExchange];

  const headers = useRequestHeaders(["cookie", "authorization"]) as HeadersInit;

  return {
    exchanges,
    fetchOptions: () => ({ headers }),
  };
});
