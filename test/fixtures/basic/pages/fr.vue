<template>
  <div>{{ fr.name }}</div>
</template>

<script setup lang="ts">
import { computed, useQuery } from "#imports";
import { gql } from "@urql/core";

const { data } = await useQuery({
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
