import * as graphql from '@graphql-eslint/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  [
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
      files: ['gql/schema.graphql'],
      rules: {
        ...graphql.configs['flat/schema-recommended'],
        // '@graphql-eslint/require-description': 'off',
      },
    },
    {
      files: ['gql/queries/*.graphql'],
      rules: graphql.configs['flat/operations-recommended'],
    },
  ],
)
