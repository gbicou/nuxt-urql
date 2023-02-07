import { createClient, ssrExchange } from "@urql/core";
import { ref, defineNuxtPlugin, useRuntimeConfig } from "#imports";
import NuxtUrqlClient from "#urql-client";

export default defineNuxtPlugin((nuxtApp) => {
  const { endpoint, ssrKey } = useRuntimeConfig().public.urql;

  // create ssr exchange
  const ssr = ssrExchange({
    isClient: process.client,
  });

  // when app is created in browser, restore SSR state from nuxt payload
  if (process.client) {
    nuxtApp.hook("app:created", () => {
      ssr.restoreData(nuxtApp.payload.data[ssrKey]);
    });
  }

  // when app has rendered in server, send SSR state to client
  if (process.server) {
    nuxtApp.hook("app:rendered", () => {
      nuxtApp.payload.data[ssrKey] = ssr.extractData();
    });
  }

  // retrieve user client options to create client
  const client = createClient({
    ...NuxtUrqlClient(ssr),
    url: endpoint,
  });

  // provide client to @urql/vue
  nuxtApp.vueApp.provide("$urql", ref(client));

  return {
    provide: {
      urql: client,
    },
  };
});
