import * as graphql from '@graphql-eslint/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    ignores: ['**/gql/types.ts'],
  },
  {
    files: ['**/*.graphql'],
    languageOptions: {
      parser: graphql.parser,
    },
    plugins: {
      '@graphql-eslint': { rules: graphql.rules },
    },
  },
  {
    files: ['**/gql/schema.graphql'],
    rules: {
      ...graphql.configs['flat/schema-recommended'],
      '@graphql-eslint/strict-id-in-types': ['error', { acceptedIdNames: ['id', 'code'] }],
    },
  },
  {
    files: ['**/gql/queries/*.graphql'],
    rules: graphql.configs['flat/operations-recommended'],
  },
).override('nuxt/disables/routes', {
  files: ['**/pages/**/*.vue'],
})
