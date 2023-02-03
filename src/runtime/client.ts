import { dedupExchange, cacheExchange, fetchExchange } from "@urql/core";
// @ts-ignore
import NuxtUrqlOptions from "#urql-options";
import type { ClientOptions } from "@urql/core";
import type { SSRExchange } from "@urql/core/dist/types/exchanges/ssr";

export type UrqlClientOptions = (ssr: SSRExchange) => ClientOptions;

export const defineUrqlClient = (f: UrqlClientOptions) => f;

export default defineUrqlClient((ssr) => ({
  ...NuxtUrqlOptions.client,
  exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
}));
