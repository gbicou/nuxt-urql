import type { Client } from '@urql/core'
import { useNuxtApp } from '#imports'

export const useUrqlClient = (clientName?: string) => {
  const nuxtApp = useNuxtApp()

  if (!clientName) {
    return nuxtApp.$urql as Client
  }
  if (Object.keys(nuxtApp.$urqlClients).includes(clientName)) {
    return nuxtApp.$urqlClients[clientName] as Client
  }
  throw createError(`useUrqlClient: clientName "${clientName}" not found.`)
}
