<template>
  <div>
    <p>client handle:</p>
    <pre>{{ ch }}</pre>
  </div>
</template>

<script setup lang="ts">
import { useClientHandle } from "#imports";

const ch = useClientHandle();
</script>
