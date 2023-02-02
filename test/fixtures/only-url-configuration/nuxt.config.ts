import UrqlModule from "../../../src/module";

export default defineNuxtConfig({
  modules: [UrqlModule],
  urql: {
    client: {
      url: "https://countries.trevorblades.com/",
    },
  },
});
