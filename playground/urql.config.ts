import { dedupExchange, fetchExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import type { GraphCacheConfig } from "./gql/types";
import schema from "./gql/introspection";
import { useRuntimeConfig } from "#app";
import { yogaExchange } from "@graphql-yoga/urql-exchange";
import { defineUrqlClient } from "#urql/client";
import { makeDefaultStorage } from "@urql/exchange-graphcache/default-storage";

function getToken(): string {
  return Math.random().toString(16);
}

// use urql graphcache
const cacheConfig: GraphCacheConfig = {
  schema,
  keys: {
    Country: (data) => data.code || null,
  },
  resolvers: {
    Query: {
      country: (_, args) => ({ __typename: "Country", code: args.code }),
    },
  },
  storage: process.client ? makeDefaultStorage() : undefined,
};

export default defineUrqlClient((ssr) => {
  const runtimeConfig = useRuntimeConfig();

  const exchanges = process.server
    ? [ssr, fetchExchange]
    : [dedupExchange, cacheExchange(cacheConfig), ssr, yogaExchange()];

  return {
    url: runtimeConfig.public.graphqlApiUrl,
    fetchOptions: () => {
      const token = getToken();
      return {
        headers: { authorization: token ? `Bearer ${token}` : "" },
      };
    },
    exchanges,
  };
});
