import { dedupExchange, cacheExchange, fetchExchange, type ClientOptions } from "@urql/core";
import { useRuntimeConfig } from "#app";
import type { SSRExchange } from "@urql/core/dist/types/exchanges/ssr";

// client options from configured ssr
export type UrqlClientOptions = (ssr: SSRExchange) => ClientOptions;

// helper to define client options
export const defineUrqlClient = (f: UrqlClientOptions) => f;

// default client options with exchanges
export default defineUrqlClient((ssr) => {
  const { client } = useRuntimeConfig().public.urql;
  return {
    ...(client as ClientOptions),
    exchanges: process.server ? [ssr, fetchExchange] : [dedupExchange, cacheExchange, ssr, fetchExchange],
  };
});
