<template>
  <main>
    <h4>Composable</h4>
    <pre>{{ data?.version }}</pre>
  </main>
</template>

<script setup lang="ts">
import { VersionDocument } from '~/gql/queries/version'

const client = useUrqlClient()

const { data } = await client.query(VersionDocument, {}).toPromise()
</script>
