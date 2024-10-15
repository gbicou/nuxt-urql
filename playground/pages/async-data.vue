<template>
  <main>
    <hgroup>
      <h4>Async data</h4>
      <h5>Simple query non awaited</h5>
    </hgroup>
    <p>stale = {{ query?.stale }}</p>
    <p>error = {{ query?.error }}</p>
    <p>
      version = <code>{{ version }}</code>
    </p>
    <pre>{{ query }}</pre>
  </main>
</template>

<script setup lang="ts">
import { VersionDocument } from "~/gql/queries/version";
import { useUrqlQuery } from "#urql/composables/useUrqlQuery";

const query = useUrqlQuery(VersionDocument, {});

const version = computed(() => query.value?.data?.version ?? "");
</script>
