import { cacheExchange, type ClientOptions, fetchExchange, type SSRExchange } from '@urql/core'
import { useRuntimeConfig } from '#app'

/**
 * client options except endpoint
 * @see {@link ClientOptions}
 */
export type UrqlClientOptions = Omit<ClientOptions, 'url'>

/**
 * client options return value
 */
export type UrqlClientOptionsReturned = PromiseLike<UrqlClientOptions> | UrqlClientOptions

/**
 * client options for multiple clients
 */
export type UrqlMultipleClientOptions<T extends object> = { default: UrqlClientOptions } & {
  [K in keyof T]: K extends 'default' ? UrqlClientOptions : ClientOptions
}

/**
 * client options in multiple clients scenario
 */
export type UrqlMultipleClientOptionsReturned<T extends UrqlMultipleClientOptions<T>> = PromiseLike<T> | T

/**
 * helper to build client options from configured ssr
 * @param ssr - exchange configured to work with nuxt payload
 */
export type UrqlClientBuild<T extends UrqlMultipleClientOptions<T>> = (ssr: SSRExchange) => UrqlClientOptionsReturned | UrqlMultipleClientOptionsReturned<T>

/**
 * helper to define client options
 * @param f - client build options
 * @returns client options
 */
export const defineUrqlClient = <T extends UrqlMultipleClientOptions<T>>(f: UrqlClientBuild<T>) => f

/**
 * default client options and exchanges
 */
export default defineUrqlClient((ssr) => {
  const { client } = useRuntimeConfig().public.urql
  const options = typeof client === 'string' ? {} : client
  return {
    ...options,
    exchanges: import.meta.server ? [ssr, fetchExchange] : [cacheExchange, ssr, fetchExchange],
  }
})
