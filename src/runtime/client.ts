import { dedupExchange, cacheExchange, fetchExchange, type ClientOptions } from "@urql/core";
import { useRuntimeConfig } from "#app";
import type { SSRExchange } from "@urql/core/dist/types/exchanges/ssr";

// client options except endpoint
export type UrqlClientOptions = Omit<ClientOptions, "url">;

// helper to build client options from configured ssr
export type UrqlClientBuild = (ssr: SSRExchange) => PromiseLike<UrqlClientOptions> | UrqlClientOptions;

// helper to define client options
export const defineUrqlClient = (f: UrqlClientBuild) => f;

// default client options with exchanges
export default defineUrqlClient((ssr) => {
  const { client } = useRuntimeConfig().public.urql;
  const options = typeof client === "string" ? {} : client;
  return {
    ...options,
    exchanges: process.server ? [ssr, fetchExchange] : [dedupExchange, cacheExchange, ssr, fetchExchange],
  };
});
