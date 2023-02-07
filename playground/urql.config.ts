import { dedupExchange, fetchExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import type { GraphCacheConfig } from "./gql/types";
import schema from "./gql/introspection";
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
  const exchanges = process.server
    ? [ssr, fetchExchange]
    : [dedupExchange, cacheExchange(cacheConfig), ssr, fetchExchange];

  return {
    url: process.env.GQL_ENDPOINT ?? "https://countries.bicou.com/",
    fetchOptions: () => {
      const token = getToken();
      return {
        headers: { authorization: token ? `Bearer ${token}` : "" },
      };
    },
    exchanges,
  };
});
