export default defineNuxtConfig({
  modules: ["../src/module"],
  urql: {
    endpoint: "https://countries.bicou.com/",
  },
  experimental: {
    payloadExtraction: false,
  },
  css: ["~/assets/css/app.scss"],
});
