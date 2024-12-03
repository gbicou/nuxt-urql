import graphql from '@graphql-eslint/eslint-plugin'
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
      '@graphql-eslint': graphql,
    },
  },
  {
    files: ['**/gql/schema.graphql'],
    rules: {
      ...graphql.configs['flat/schema-recommended'].rules,
      '@graphql-eslint/strict-id-in-types': ['error', { acceptedIdNames: ['id', 'code'] }],
    },
  },
  {
    files: ['**/gql/queries/*.graphql'],
    rules: graphql.configs['flat/operations-recommended'].rules,
  },
).override('nuxt/disables/routes', {
  files: ['**/pages/**/*.vue'],
})
