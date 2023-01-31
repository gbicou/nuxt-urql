import {defineNuxtModule, addPlugin, createResolver, resolvePath} from '@nuxt/kit'
import { name } from '../package.json'

// Module options TypeScript inteface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    configKey: 'urql'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.alias['#urql'] = resolver.resolve('./runtime')

    const configPath = await resolvePath('urql.config')

    nuxt.options.alias['#urql-config'] = configPath

    if (nuxt.options.dev) {
      // @ts-ignore
      nuxt.options.watch ||= []
      // @ts-ignore
      nuxt.options.watch.push(configPath)
    }

    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
