export default defineNuxtConfig({
  modules: ['../src/module', '@nuxt/eslint'],
  css: ['~/assets/css/app.scss'],
  experimental: {
    payloadExtraction: false,
  },
  eslint: {
    config: {
      stylistic: true,
      tooling: true,
    },
  },
  urql: {
    endpoint: 'https://countries.bicou.com/',
  },
})
