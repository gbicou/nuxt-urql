import { dedupExchange, fetchExchange, cacheExchange } from "@urql/core";
import { defineUrqlClient } from "#urql/client";

export default defineUrqlClient((ssr) => ({
  url: `http://localhost:${process.env.PORT}/api/graphql`,
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssr, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
}));
