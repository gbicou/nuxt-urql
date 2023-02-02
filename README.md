# Nuxt URQL module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> URQL client for Nuxt v3

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Foo
- 🚠 &nbsp;Bar
- 🌲 &nbsp;Baz

## Quick Setup

1. Add `@bicou/nuxt-urql` dependency to your project

```bash
# Using pnpm
pnpm add -D @bicou/nuxt-urql

# Using yarn
yarn add --dev @bicou/nuxt-urql

# Using npm
npm install --save-dev @bicou/nuxt-urql
```

2. Add `@bicou/nuxt-urql` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@bicou/nuxt-urql'
  ]
})
```

That's it! You can now use Nuxt URQL module in your Nuxt app ✨

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

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@bicou/nuxt-urql/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@bicou/nuxt-urql

[npm-downloads-src]: https://img.shields.io/npm/dm/@bicou/nuxt-urql.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@bicou/nuxt-urql

[license-src]: https://img.shields.io/npm/l/@bicou/nuxt-urql.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@bicou/nuxt-urql
