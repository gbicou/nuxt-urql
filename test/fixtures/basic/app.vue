<template>
  <div>
    <ul>
      <li v-for="c of countries" :key="c">
        {{ c.name }}
      </li>
    </ul>
    basic
  </div>
</template>

<script setup lang="ts">
import { computed, useQuery } from "#imports";
import { gql } from "@urql/core";

const { data } = await useQuery({
  query: gql`
    query countries {
      countries {
        name
      }
    }
  `,
});
const countries = computed(() => data.value?.countries ?? []);
</script>
