<script setup lang="ts">
const $urql = useUrqlClient()
</script>

<template>
  <main>
    <div>OK</div>
    {{ $urql }}
  </main>
</template>
