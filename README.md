# Nuxt URQL module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

### :warning: :warning: :warning: this is a work in progress :warning: :warning: :warning:

> URQL client for Nuxt v3

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [📖 &nbsp;Documentation](https://nuxt-urql-docs.vercel.app/)

## Features

- @urql/vue integration
- SSR exchange
- client customization

## Quick Setup

Add `@bicou/nuxt-urql` dependency to your project

```bash
# Using pnpm
pnpm add -D @bicou/nuxt-urql graphql

# Using yarn
yarn add --dev @bicou/nuxt-urql graphql

# Using npm
npm install --save-dev @bicou/nuxt-urql graphql
```

Add `@bicou/nuxt-urql` to the `modules` section of `nuxt.config.ts` and
configure the urql client with the endpoint url


```js
export default defineNuxtConfig({
  modules: [
    '@bicou/nuxt-urql'
  ],
  urql: {
    endpoint: "http://myapi/graphql"
  }
})
```

That's it! You can now use Nuxt URQL module in your Nuxt app ✨

```vue
<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
import { useQuery, gql } from "#imports";

const { data } = await useQuery({
  query: gql`
    query name {
      # ...
    }
  `,
});
</script>
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@bicou/nuxt-urql/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@bicou/nuxt-urql

[npm-downloads-src]: https://img.shields.io/npm/dm/@bicou/nuxt-urql.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@bicou/nuxt-urql

[license-src]: https://img.shields.io/npm/l/@bicou/nuxt-urql.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@bicou/nuxt-urql
