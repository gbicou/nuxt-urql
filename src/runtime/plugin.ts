import { defineNuxtPlugin } from '#app'
import urqlConfig from '#urql-config'
import { createClient, ssrExchange} from "@urql/core";
import {ref} from "#imports";

const ssrKey = '__URQL_DATA__'

export default defineNuxtPlugin((nuxtApp) => {

  const ssr = ssrExchange({
    isClient: process.client
  })

  // when app is created in browser, restore SSR state from nuxt payload
  if (process.client) {
    nuxtApp.hook('app:created', () => {
      ssr.restoreData(nuxtApp.payload[ssrKey])
    })
  }

  // when app has rendered in server, send SSR state to client
  if (process.server) {
    nuxtApp.hook('app:rendered', () => {
      nuxtApp.payload[ssrKey] = ssr.extractData()
    })
  }

  const client = createClient(urqlConfig(ssr))

  nuxtApp.vueApp.provide('$urql', ref(client))
})
