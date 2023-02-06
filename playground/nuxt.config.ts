export default defineNuxtConfig({
  modules: ["../src/module"],
  urql: {},
  experimental: {
    payloadExtraction: false,
  },
});
