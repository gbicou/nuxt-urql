<template>
  <div>
    <h3>Countries (fetching = {{ fetching }})</h3>
    <ul>
      <li v-for="c of countries" :key="c.code">
        {{ c.name }}
        <code>{{ c.code }}</code>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useQuery} from "@urql/vue";
import {computed} from "#imports";
import {CountriesDocument} from "~/gql/queries/countries";

const { data, fetching } = await useQuery({
  query: CountriesDocument
})

const countries = computed(() => data.value?.countries ?? [])

</script>

<style scoped>
code {
  display: inline-block;
  background-color: #e2e2e2;
  color: #303030;
  padding: .1em .3em;
  border-radius: .4em;
}
</style>
