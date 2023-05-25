import { fetchExchange } from "@urql/core";
import { cacheExchange } from "@urql/exchange-graphcache";
import type { GraphCacheConfig } from "./gql/types";
import schema from "./gql/introspection";
import { defineUrqlClient } from "#urql/client";
import { makeDefaultStorage } from "@urql/exchange-graphcache/default-storage";
import { useRequestHeaders } from "#app";

export default defineUrqlClient((ssr) => {
  const exchanges = [ssr, fetchExchange];

  if (process.client) {
    // configure urql graphcache with codegen types
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
      storage: makeDefaultStorage(),
    };
    // insert cache exchange
    exchanges.unshift(cacheExchange(cacheConfig));
  }

  const headers = useRequestHeaders(["cookie", "authorization"]);

  return {
    exchanges,
    fetchOptions: () => ({ headers }),
  };
});
