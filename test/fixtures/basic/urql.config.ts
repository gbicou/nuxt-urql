import { dedupExchange, fetchExchange, cacheExchange } from "@urql/core";
import { defineUrqlClient } from "#urql/client";

export default defineUrqlClient((ssr) => ({
  url: "https://countries.trevorblades.com/",
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssr, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
}));
