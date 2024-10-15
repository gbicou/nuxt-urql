<template>
  <main>
    <hgroup>
      <h4>GQL</h4>
      <h5>Use gql template string</h5>
    </hgroup>
    <p>fetching = {{ fetching }}</p>
    <p>error = {{ error }}</p>
    <p>
      version = <code>{{ version }}</code>
    </p>
  </main>
</template>

<script setup lang="ts">
const { data, fetching, error } = useQuery({
  query: gql<{ version: string }>`
    query {
      version
    }
  `,
})

const version = computed(() => data.value?.version ?? '')
</script>
