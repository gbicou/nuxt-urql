import { defineNuxtModule, addPlugin, createResolver, addImports, findPath } from "@nuxt/kit";
import { name, version } from "../package.json";
import type { ClientOptions } from "@urql/core";
import defu from "defu";
import type { SSRExchangeParams } from "@urql/core/dist/types/exchanges/ssr";

// serializable URQL client options
export type ModuleClientOptions = Pick<ClientOptions, "preferGetMethod" | "requestPolicy" | "maskTypename">;

// SSR exchange params
export type ModuleSSRParams = Pick<SSRExchangeParams, "staleWhileRevalidate" | "includeExtensions"> & {
  // key for SSR data transmission
  key: string;
};

// Module options TypeScript inteface definition
export interface ModuleOptions {
  endpoint: string;
  // client options object or path to client setup script
  client: ModuleClientOptions | string;
  // SSR exchange options
  ssr: ModuleSSRParams;
}

export interface ModulePublicRuntimeConfig {
  urql: ModuleOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "urql",
    compatibility: {
      nuxt: "^3",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    endpoint: "",
    client: "urql.config",
    ssr: { key: "__URQL_DATA__" },
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // expose public options
    nuxt.options.runtimeConfig.public.urql = defu(nuxt.options.runtimeConfig.public.urql, {
      endpoint: options.endpoint,
      client: options.client,
      ssr: options.ssr,
    });

    // alias runtime
    nuxt.options.alias["#urql"] = resolve("./runtime");

    // load client config
    const clientPathDefault = resolve("./runtime/client");
    const clientPath =
      typeof options.client === "string" ? (await findPath(options.client)) ?? clientPathDefault : clientPathDefault;
    nuxt.options.alias["#urql-client"] = clientPath;

    // import urql vue composables
    addImports(
      ["useClientHandle", "useQuery", "useMutation", "useSubscription"].map((name) => ({
        name,
        from: "@urql/vue",
      }))
    );

    // watch client config
    if (nuxt.options.dev) {
      // @ts-ignore
      nuxt.options.watch = nuxt.options.watch || [];
      // @ts-ignore
      nuxt.options.watch.push(clientPath);
    }

    // add plugin
    addPlugin(resolve("./runtime/plugin"));

    nuxt.options.build.transpile
      .push
      //   '@urql/vue'
      ();
  },
});

declare module "@nuxt/schema" {
  interface PublicRuntimeConfig {
    urql: ModuleOptions;
  }
}
