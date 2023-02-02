import { SSRExchange } from "@urql/core/dist/types/exchanges/ssr";
import { ClientOptions } from "@urql/core";

// serializable URQL client options
export type ModuleClientOptions = Pick<
  ClientOptions,
  "url" | "preferGetMethod" | "requestPolicy" | "maskTypename" | "suspense"
>;

export type UrqlClientOptions = (ssr: SSRExchange) => ClientOptions;

export const defineUrqlClient = (f: UrqlClientOptions) => f;
