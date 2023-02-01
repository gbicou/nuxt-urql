import { defineNuxtModule, addPlugin, createResolver, resolvePath, addTemplate, addImports } from "@nuxt/kit";
import { name, version } from "../package.json";

// Module options TypeScript inteface definition
export interface ModuleOptions {
  ssrKey: string;
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
  },
  async setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // alias runtime
    nuxt.options.alias["#urql"] = resolve("./runtime");

    // load client config
    const configPath = await resolvePath("urql.config");
    nuxt.options.alias["#urql-config"] = configPath;

    // send module config to plugin
    addTemplate({
      filename: "urql-module.d.ts",
      getContents: () => ["declare const ssrKey: string", "export default { ssrKey }"].join("\n"),
    });
    nuxt.options.alias["#urql-module"] = addTemplate({
      filename: "urql-module.mjs",
      getContents: () => ["export default {", ` ssrKey: ${JSON.stringify(options.ssrKey)}`, "}"].join("\n"),
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
