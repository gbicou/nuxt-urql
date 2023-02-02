import { defineNuxtModule, addPlugin, createResolver, addTemplate, addImports, resolvePath } from "@nuxt/kit";
import { name, version } from "../package.json";
import { ModuleClientOptions } from "#urql";

// Module options TypeScript inteface definition
export interface ModuleOptions {
  ssrKey: string;
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
    let configPath: string | null;
    if (typeof options.client === "string") {
      configPath = await resolvePath(options.client);
    } else {
      configPath = addTemplate({
        filename: "urql-config.mjs",
        getContents: () =>
          [
            'import { dedupExchange, cacheExchange, fetchExchange } from "@urql/core";',
            'import NuxtUrql from "#urql-module";',
            "export default (ssr) => ({ ...NuxtUrql.client,",
            "  exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange]",
            "});",
          ].join("\n"),
      }).dst;
    }
    nuxt.options.alias["#urql-config"] = configPath;

    // send module config to plugin
    addTemplate({
      filename: "urql-module.d.ts",
      getContents: () =>
        [
          'import { ModuleClientOptions } from "#urql";',
          "declare const ssrKey: string;",
          "declare const client: ModuleClientOptions | null;",
          "export default { ssrKey, client }",
        ].join("\n"),
    });
    nuxt.options.alias["#urql-module"] = addTemplate({
      filename: "urql-module.mjs",
      getContents: () =>
        [
          "export default {",
          ` ssrKey: ${JSON.stringify(options.ssrKey)},`,
          ` client: ${JSON.stringify(typeof options.client === "object" ? options.client : null)},`,
          "}",
        ].join("\n"),
    }).dst;

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
      nuxt.options.watch ||= [];
      // @ts-ignore
      nuxt.options.watch.push(configPath);
    }

    // add plugin
    addPlugin(resolve("./runtime/plugin"));

    nuxt.options.build.transpile
      .push
      //   '@urql/vue'
      ();
  },
});
