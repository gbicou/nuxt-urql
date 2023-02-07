<template>
  <main>
    <hgroup>
      <h4>Version</h4>
      <h5>Simple query non awaited</h5>
    </hgroup>
    <p>fetching = {{ fetching }}</p>
    <p>
      version = <code>{{ version }}</code>
    </p>
  </main>
</template>

<script setup lang="ts">
import { computed, useQuery } from "#imports";
import { VersionDocument } from "~/gql/queries/version";

const { data, fetching } = useQuery({
  query: VersionDocument,
});

const version = computed(() => data.value?.version ?? "");
</script>
