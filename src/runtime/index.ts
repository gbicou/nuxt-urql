import { SSRExchange } from "@urql/core/dist/types/exchanges/ssr";
import { ClientOptions } from "@urql/core";

export type UrqlClientOptions = (ssr: SSRExchange) => ClientOptions;

export const defineUrqlClient = (f: UrqlClientOptions) => f;
