<template>
  <main>
    <hgroup>
      <h4>Find a country</h4>
      <h5>Query with variable from input</h5>
    </hgroup>
    <article>
      <label>
        ISO code
        <input v-model="code" placeholder="FR, be, ..." />
      </label>
      <footer>
        <p>fetching = {{ fetching }}</p>
        <p>Result:</p>
        <pre>{{ country }}</pre>
      </footer>
    </article>
  </main>
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
