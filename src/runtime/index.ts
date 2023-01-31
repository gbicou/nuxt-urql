import {SSRExchange} from "@urql/core/dist/types/exchanges/ssr";
import {ClientOptions} from "@urql/core";

export type UrqlConfig = (ssr: SSRExchange) => ClientOptions

export function defineUrqlConfig(c: UrqlConfig): UrqlConfig {
  return c
}
