import { dedupExchange, cacheExchange, fetchExchange } from "@urql/core";
// @ts-ignore
import NuxtUrqlOptions from "#urql-options";
import type { ClientOptions } from "@urql/core";
import type { SSRExchange } from "@urql/core/dist/types/exchanges/ssr";

// client options from configured ssr
export type UrqlClientOptions = (ssr: SSRExchange) => ClientOptions;

// helper to define client options
export const defineUrqlClient = (f: UrqlClientOptions) => f;

// default client options with exchanges
export default defineUrqlClient((ssr) => ({
  ...NuxtUrqlOptions.client,
  exchanges: process.server ? [ssr, fetchExchange] : [dedupExchange, cacheExchange, ssr, fetchExchange],
}));
