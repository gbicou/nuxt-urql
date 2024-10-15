<template>
  <main>
    <h4>Client handle</h4>
    <pre>{{ ch }}</pre>
  </main>
</template>

<script setup lang="ts">
const ch = useClientHandle()
</script>
