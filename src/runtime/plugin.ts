import { createClient, ssrExchange } from "@urql/core";
import { ref, defineNuxtPlugin } from "#imports";
import NuxtUrqlOptions from "#urql-options";
import NuxtUrqlClient from "#urql-client";

export default defineNuxtPlugin((nuxtApp) => {
  // create ssr exchange
  const ssr = ssrExchange({
    isClient: process.client,
  });

  // when app is created in browser, restore SSR state from nuxt payload
  if (process.client) {
    nuxtApp.hook("app:created", () => {
      ssr.restoreData(nuxtApp.payload.data[NuxtUrqlOptions.ssrKey]);
    });
  }

  // when app has rendered in server, send SSR state to client
  if (process.server) {
    nuxtApp.hook("app:rendered", () => {
      nuxtApp.payload.data[NuxtUrqlOptions.ssrKey] = ssr.extractData();
    });
  }

  // retrieve user client options to create client
  const client = createClient(NuxtUrqlClient(ssr));

  // provide client to @urql/vue
  nuxtApp.vueApp.provide("$urql", ref(client));

  return {
    provide: {
      urql: client,
    },
  };
});
