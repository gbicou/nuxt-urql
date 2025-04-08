import UrqlModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [UrqlModule],

  runtimeConfig: {
    public: {
      endpoint: '#override',
    },
  },

  compatibilityDate: '2025-04-08',

  urql: {
    endpoint: '#initial',
  },
})
