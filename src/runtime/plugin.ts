import { createClient, ssrExchange } from "@urql/core";
import { ref, defineNuxtPlugin, useRuntimeConfig } from "#imports";
import NuxtUrqlClient from "#urql-client";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { endpoint, ssr: ssrParams } = useRuntimeConfig().public.urql;

  // create ssr exchange
  const ssr = ssrExchange({
    isClient: process.client,
    ...ssrParams,
  });

  // when app is created in browser, restore SSR state from nuxt payload
  if (process.client) {
    nuxtApp.hook("app:created", () => {
      ssr.restoreData(nuxtApp.payload.data[ssrParams.key]);
    });
  }

  // when app has rendered in server, send SSR state to client
  if (process.server) {
    nuxtApp.hook("app:rendered", () => {
      nuxtApp.payload.data[ssrParams.key] = ssr.extractData();
    });
  }

  // retrieve user client options to create client
  const options = await NuxtUrqlClient(ssr);

  // create urql client
  const client = createClient({
    url: endpoint,
    ...options,
  });

  // provide client to @urql/vue
  nuxtApp.vueApp.provide("$urql", ref(client));

  return {
    provide: {
      urql: client,
    },
  };
});
