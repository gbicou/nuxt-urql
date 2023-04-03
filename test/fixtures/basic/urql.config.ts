import { cacheExchange } from "@urql/core";
import { executeExchange } from "@urql/exchange-execute";
import { defineUrqlClient } from "#urql/client";
import { schema } from "@bicou/countries-server";

export default defineUrqlClient((ssr) => ({
  exchanges: [
    cacheExchange,
    ssr,
    // mock countries server
    executeExchange({
      schema,
    }),
  ],
}));
