<template>
  <div>
    <h3>Version (fetching = {{ fetching }})</h3>
    <p>{{ version }}</p>
  </div>
</template>

<script setup lang="ts">
import {useQuery} from "@urql/vue";
import {computed} from "#imports";
import {VersionDocument} from "~/gql/queries/version";

const { data, fetching } = useQuery({
  query: VersionDocument
})

const version = computed(() => data.value?.version ?? '')

</script>
