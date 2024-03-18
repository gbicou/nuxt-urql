# [1.7.0](https://github.com/gbicou/nuxt-urql/compare/v1.6.2...v1.7.0) (2023-11-20)

## 1.7.2

### Patch Changes

- [`c6bc745`](https://github.com/gbicou/nuxt-urql/commit/c6bc745e1d05ee9bce40fae8213ccceccde9891b) Thanks [@gbicou](https://github.com/gbicou)! - upgrade dependencies

- [`cd055e1`](https://github.com/gbicou/nuxt-urql/commit/cd055e19fd68065cc02cc51e7a1cf3c3010aae8c) Thanks [@gbicou](https://github.com/gbicou)! - add type annotation to runtime plugin

- [`9dbcd90`](https://github.com/gbicou/nuxt-urql/commit/9dbcd9030f28fa10f25f74e46acc0310922cd08a) Thanks [@gbicou](https://github.com/gbicou)! - upgrade dependencies

## 1.7.1

### Patch Changes

- [`00f046d`](https://github.com/gbicou/nuxt-urql/commit/00f046d677c71d240f1239f9aaf4900327fc10e1) Thanks [@gbicou](https://github.com/gbicou)! - dependencies upgrade

- [`dc7fe0c`](https://github.com/gbicou/nuxt-urql/commit/dc7fe0ccf77c142c8a69d714f0ef72f3a381e292) Thanks [@gbicou](https://github.com/gbicou)! - use nuxt useState composable for SSR data

- [`e2a095a`](https://github.com/gbicou/nuxt-urql/commit/e2a095acc10e097b392853108fddce97876bf0ec) Thanks [@gbicou](https://github.com/gbicou)! - upgrade nuxt 3.9 and vue 3.4

### Features

- adds useUrqlClient composable to access the client instance ([03b102d](https://github.com/gbicou/nuxt-urql/commit/03b102dfd1eb66f0180344d908a12f11f3f6f91b))

## [1.6.2](https://github.com/gbicou/nuxt-urql/compare/v1.6.1...v1.6.2) (2023-11-07)

### Bug Fixes

- upgrade dependencies ([b61e7a9](https://github.com/gbicou/nuxt-urql/commit/b61e7a99d7abfd2dbc5a7f8a9e6014779e6a407f))

## [1.6.1](https://github.com/gbicou/nuxt-urql/compare/v1.6.0...v1.6.1) (2023-07-07)

### Bug Fixes

- log error when no endpoint is provided ([925cced](https://github.com/gbicou/nuxt-urql/commit/925cced0b7d4487eb0b0e265569f8e9bbe8861eb))

# [1.6.0](https://github.com/gbicou/nuxt-urql/compare/v1.5.1...v1.6.0) (2023-06-29)

### Features

- custom endpoint in server side mode ([4e03835](https://github.com/gbicou/nuxt-urql/commit/4e038353b7443a97518fa8c68f7c0cd0cd9f91a8))

## [1.5.1](https://github.com/gbicou/nuxt-urql/compare/v1.5.0...v1.5.1) (2023-06-23)

### Bug Fixes

- package.json and pnpm lock ([611bca4](https://github.com/gbicou/nuxt-urql/commit/611bca4eccc510564edef0ad4d9c8176b668a8ab))
- upgrade to nuxt 3.6 ([fc94861](https://github.com/gbicou/nuxt-urql/commit/fc94861866b731c0147b1198f5280d647c727040))

# [1.5.0](https://github.com/gbicou/nuxt-urql/compare/v1.4.1...v1.5.0) (2023-05-19)

### Features

- upgrade nuxt 3.5 + vue 3.3 ([917e5bf](https://github.com/gbicou/nuxt-urql/commit/917e5bf96b90bfcefd7c3c7b5d3c2ed67c1df65c))

## [1.4.1](https://github.com/gbicou/nuxt-urql/compare/v1.4.0...v1.4.1) (2023-05-03)

### Reverts

- Revert "chore: upgrade dependencies" ([f86b465](https://github.com/gbicou/nuxt-urql/commit/f86b4651a20ce93cf77dfdd573dc16ce44a8d605))

# [1.4.0](https://github.com/gbicou/nuxt-urql/compare/v1.3.0...v1.4.0) (2023-04-12)

### Features

- upgrade nuxt to version 3.4 ([3e92b43](https://github.com/gbicou/nuxt-urql/commit/3e92b43036f34daaeef1d190390af8b07e97cd11))

# [1.3.0](https://github.com/gbicou/nuxt-urql/compare/v1.2.0...v1.3.0) (2023-04-04)

### Features

- upgrade nuxt to version 3.3 ([0eb5985](https://github.com/gbicou/nuxt-urql/commit/0eb59853794b3ebd79fcdd9f8d47e8edc7ef45d2))

# [1.2.0](https://github.com/gbicou/nuxt-urql/compare/v1.1.8...v1.2.0) (2023-04-03)

### Bug Fixes

- **deps:** update dependency @urql/core to v4 ([0efad74](https://github.com/gbicou/nuxt-urql/commit/0efad74acc75e36a2b6e351d35a7448765e1b5fe))

### Features

- upgrade to urql v4 ([9592668](https://github.com/gbicou/nuxt-urql/commit/959266809872de8bc0ae75cc10863d7f8321622f))

## [1.1.8](https://github.com/gbicou/nuxt-urql/compare/v1.1.7...v1.1.8) (2023-02-13)

### Bug Fixes

- import gql from @urql/core ([95cb0af](https://github.com/gbicou/nuxt-urql/commit/95cb0af95b8ab3de8c71b34b11928b54d7d75b54))

## [1.1.7](https://github.com/gbicou/nuxt-urql/compare/v1.1.6...v1.1.7) (2023-02-13)

### Bug Fixes

- add staleWhileRevalidate and includeExtensions options to SSR ([01619ad](https://github.com/gbicou/nuxt-urql/commit/01619ad2447d06b67c295f02bbc2991bbb982c3d))
- **options:** remove suspense option (urql react only) ([6bbf99e](https://github.com/gbicou/nuxt-urql/commit/6bbf99ef16dee5bd1d8059d5d09acb9ed8b6b0d1))

## [1.1.6](https://github.com/gbicou/nuxt-urql/compare/v1.1.5...v1.1.6) (2023-02-08)

### Bug Fixes

- allow non existant urql.config file ([1ba1498](https://github.com/gbicou/nuxt-urql/commit/1ba14989715a103af45f7d3265b46e6249049877))

## [1.1.5](https://github.com/gbicou/nuxt-urql/compare/v1.1.4...v1.1.5) (2023-02-07)

### Bug Fixes

- allow async config ([b4a67d5](https://github.com/gbicou/nuxt-urql/commit/b4a67d50e2d0fa8eef42bc901362710aaeea051e))

## [1.1.4](https://github.com/gbicou/nuxt-urql/compare/v1.1.3...v1.1.4) (2023-02-04)

### Bug Fixes

- export useClientHandle from @urql/vue ([16312a2](https://github.com/gbicou/nuxt-urql/commit/16312a219803eab663ca8f970f52146f99dea99f))

## [1.1.3](https://github.com/gbicou/nuxt-urql/compare/v1.1.2...v1.1.3) (2023-02-03)

### Performance Improvements

- **test:** use own sample schema for server ([e48d9f3](https://github.com/gbicou/nuxt-urql/commit/e48d9f3bde4d37d173e3c8888c7d0b857bb8af21))

## [1.1.2](https://github.com/gbicou/nuxt-urql/compare/v1.1.1...v1.1.2) (2023-02-03)

### Bug Fixes

- **client:** remove dedup and cache on server ([35b7df5](https://github.com/gbicou/nuxt-urql/commit/35b7df5b31d39b2f3f23432968ec9baacbea1828))

## [1.1.1](https://github.com/gbicou/nuxt-urql/compare/v1.1.0...v1.1.1) (2023-02-02)

### Bug Fixes

- **build:** inlined implicit external causing error ([d1f47a2](https://github.com/gbicou/nuxt-urql/commit/d1f47a25eac6c611a048dc41fb78e00167f4f637))
- **build:** module needs playground preparation ([6e96a66](https://github.com/gbicou/nuxt-urql/commit/6e96a66579a2d9d601efd98b971d8947133a52e0))

# [1.1.0](https://github.com/gbicou/nuxt-urql/compare/v1.0.0...v1.1.0) (2023-02-02)

### Features

- allow simple configuration in module config ([c454df5](https://github.com/gbicou/nuxt-urql/commit/c454df5ec88b0eea8810fe85e4cbca71875cee15))

# 1.0.0 (2023-02-02)

### Bug Fixes

- **packaging:** run pnpm ([10e7bf2](https://github.com/gbicou/nuxt-urql/commit/10e7bf2fe31b624503d702e7f9ed0f0e79050abc))
- **packaging:** workflow setup ([afa4305](https://github.com/gbicou/nuxt-urql/commit/afa4305711dd55ef41cf9d401bc5743b78156bf3))

### Reverts

- Revert "vercel error" ([ceaecf0](https://github.com/gbicou/nuxt-urql/commit/ceaecf0de4bd75514b0f63d50eca63ad4e1e6ca7))
