<template>
  <div>
    <h1>Nuxt urql playground</h1>
    <nav>
      <nuxt-link to="/">
        index
      </nuxt-link>
      <nuxt-link to="/version">
        version
      </nuxt-link>
      <nuxt-link to="/countries">
        countries
      </nuxt-link>
    </nav>
    <nuxt-page />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
nav a {
  display: inline-block;
  margin: .2em;
}
</style>
