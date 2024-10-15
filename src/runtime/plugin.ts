import { type Client, createClient, type SSRData, ssrExchange } from '@urql/core'
import { ref } from 'vue'
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
  const ssrData = useState<SSRData>(ssrParams.key)

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

  // create urql client
  const client: Client = createClient({
    url: (import.meta.server && ssrParams.endpoint) || endpoint,
    ...options,
  })

  // provide client to @urql/vue
  nuxtApp.vueApp.provide('$urql', ref(client))

  return {
    provide: {
      urql: client,
    },
  }
})
