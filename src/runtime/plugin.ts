import { type Client, createClient, type SSRData, ssrExchange } from '@urql/core'
import { ref } from 'vue'
import type { UrqlClientOptions, UrqlMultipleClientOptions } from '#urql/client'
import { defineNuxtPlugin, useRuntimeConfig, useState } from '#app'
import NuxtUrqlClient from '#urql-client'

export default defineNuxtPlugin(async (nuxtApp) => {
  const { endpoint, ssr: ssrParams } = useRuntimeConfig().public.urql

  // create ssr exchange
  const ssr = ssrExchange({
    isClient: import.meta.client,
    ...ssrParams,
  })

  // ssr data in nuxt state
  const ssrData = useState<SSRData>(ssrParams.key ?? '__URQL_DATA__')

  // when app is created in browser, restore SSR state from nuxt payload
  if (import.meta.client) {
    nuxtApp.hook('app:created', () => {
      ssr.restoreData(ssrData.value)
    })
  }

  // when app has rendered in server, send SSR state to client
  if (import.meta.server) {
    nuxtApp.hook('app:rendered', () => {
      ssrData.value = ssr.extractData()
    })
  }

  // retrieve user client options to create client
  const options = await NuxtUrqlClient(ssr)

  const defaultUrl = (import.meta.server && ssrParams.endpoint) || endpoint
  const clientOptions = prepareOptions(defaultUrl, options)

  const clients: Record<string, Client> = {}
  Object.entries(clientOptions).forEach(([key, value]) => {
    clients[key] = createClient(value)
  })

  // provide client to @urql/vue
  const defaultClient = ref(clients.default)
  nuxtApp.vueApp.provide('$urql', defaultClient)
  // nuxtApp.vueApp.provide('$urqlClients', { default: defaultClient })

  return {
    provide: {
      urql: clients.default,
      urqlClients: clients,
    },
  }
})

function prepareOptions(url: string, options: UrqlClientOptions | UrqlMultipleClientOptions): UrqlMultipleClientOptions {
  if (!Object.keys(options).includes('default')) {
    // single client
    return {
      default: {
        url,
        ...options as UrqlClientOptions,
      },
    }
  }
  // multiple clients
  const multipleClientOptions = options as UrqlMultipleClientOptions
  return {
    ...multipleClientOptions,
    default: {
      ...multipleClientOptions.default,
      url,
    },
  }
}
