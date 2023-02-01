export default defineNuxtConfig({
  modules: ["../src/module"],
  urql: {},
  runtimeConfig: {
    public: {
      graphqlApiUrl: "http://localhost:3000/api/graphql",
    },
  },
});
