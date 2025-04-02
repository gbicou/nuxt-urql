import type { Client } from '@urql/core'
import { useNuxtApp } from '#imports'

export const useUrqlClient = (clientName?: string) => {
  if (!clientName) {
    return useNuxtApp().$urql as Client
  }
  if (Object.keys(useNuxtApp().$urqlClients).includes(clientName)) {
    return useNuxtApp().$urqlClients[clientName] as Client
  }
  throw createError(`useUrqlClient: clientName "${clientName}" not found.`)
}
