import { defineNuxtModule, addPlugin, createResolver, addTemplate, addImports, resolvePath } from "@nuxt/kit";
import { name, version } from "../package.json";
import type { ClientOptions } from "@urql/core";

// serializable URQL client options
export type ModuleClientOptions = Pick<
  ClientOptions,
  "url" | "preferGetMethod" | "requestPolicy" | "maskTypename" | "suspense"
>;

// Module options TypeScript inteface definition
export interface ModuleOptions {
  // key for SSR data transmission
  ssrKey: string;
  // client options object or path to client setup script
  client: ModuleClientOptions | string;
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
    ssrKey: "__URQL_DATA__",
    client: "urql.config",
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // alias runtime
    nuxt.options.alias["#urql"] = resolve("./runtime");

    // load client config
    let clientPath: string | null;
    if (typeof options.client === "string") {
      clientPath = await resolvePath(options.client);
    } else {
      clientPath = resolve("./runtime/client");
    }
    nuxt.options.alias["#urql-client"] = clientPath;

    // send module config to plugin
    addTemplate({
      filename: "urql-options.mjs",
      getContents: () => `export default ${JSON.stringify(options)}`,
    });
    addTemplate({
      filename: "urql-options.d.ts",
      getContents: () =>
        [
          "import type { ModuleOptions } from '@bicou/nuxt-urql';",
          "const options: ModuleOptions;",
          "export default options;",
        ].join("\n"),
    });

    // import urql vue composables
    addImports(
      ["useQuery", "useMutation", "useSubscription"].map((name) => ({
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
