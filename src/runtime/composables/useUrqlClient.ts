import { type Client } from "@urql/core";
import { useNuxtApp } from "#imports";

export const useUrqlClient = () => {
  return useNuxtApp().$urql as Client;
};
