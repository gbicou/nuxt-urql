<template>
  <div>
    <h3>Find a country (fetching = {{ fetching }})</h3>
    <p><input v-model="code" placeholder="2 letter code" /></p>
    <p>Result:</p>
    <pre>{{ country }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed, useQuery, ref } from "#imports";
import { CountryByCodeDocument } from "~/gql/queries/countries";

const code = ref("");

const variables = computed(() => ({
  code: code.value.trim().toUpperCase(),
}));

const { data, fetching } = await useQuery({
  query: CountryByCodeDocument,
  variables,
});

const country = computed(() => data.value?.country ?? null);
</script>
