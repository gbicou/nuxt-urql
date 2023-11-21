import { cacheExchange } from "@urql/core";
import { executeExchange } from "@urql/exchange-execute";
import { defineUrqlClient } from "#urql/client";
import { buildSchema } from "@bicou/countries-server-schema";

const schema = buildSchema("test");

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
