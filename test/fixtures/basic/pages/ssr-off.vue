<template>
  <div>{{ fr.name }}</div>
</template>

<script setup lang="ts">
import { gql } from "@urql/core";

const { data } = useQuery({
  query: gql`
    query {
      fr: country(code: "FR") {
        name
      }
    }
  `,
});
const fr = computed(() => data.value?.fr ?? {});
</script>
